import { 
    prepareZXingModule, 
    readBarcodes, 
    writeBarcode } 
    from 'zxing-wasm/full';

prepareZXingModule({
    overrides: {
        locateFile: (path, prefix) => {
            if (path.endsWith(".wasm")) {
                return `/assets/nexra_barcode/js/lib/${path}`;
            }
            return prefix + path;
        }
    }
});

window.nexraBarcode = {
    /**
     * 1. SCANNER (WASM Powered)
     */
    scanFromImage: async function(imageElement, customOptions = {}) {
        const defaultReaderOptions = {
            tryHarder: true,          
            maxNumberOfSymbols: 1,   
            formats: ['EAN_13', 'Code_128', 'QRCode', 'DataMatrix', 'ITF', 'PDF_417']
        };
        const finalOptions = { ...defaultReaderOptions, ...customOptions };
        try {
            return await readBarcodes(imageElement, finalOptions);
        } catch (error) {
            console.error("Gagal membaca barcode:", error);
            return [];
        }
    },

    /**
     * 2. GENERATOR (SVG)
     */
    generateToSVG: async function(textToEncode, customOptions = {}) {
        const defaultWriterOptions = {
            format: 'Code_128',       
            scale: 2,                 
            addHRT: true,             
            addQuietZones: true,      
            invert: false             
        };
        if (typeof customOptions === 'string') {
            customOptions = { format: customOptions };
        }
        const finalOptions = { ...defaultWriterOptions, ...customOptions };
        try {
            const output = await writeBarcode(textToEncode, finalOptions);
            return output.svg; 
        } catch (error) {
            console.error("Gagal membuat barcode:", error);
            return null;
        }
    },

    /**
     * 3. UI/UX MODAL KAMERA REAL-TIME (Ultra Ringan & Responsif)
     */
    bukaModalKameraGlobal: function(frm, targetField, callbackSukses = null) {
        const dialog = new frappe.ui.Dialog({
            title: `<i class="fa fa-qrcode text-info"></i> ${__('Nexra Barcode Scanner')}`,
            fields: [
                {
                    fieldname: 'preview_html',
                    fieldtype: 'HTML',
                    options: `
                        <div style="text-align: center; position: relative; background: #000; border-radius: 8px; overflow: hidden; max-width: 480px; margin: 0 auto; box-shadow: var(--shadow-sm);">
                            <video id="nexra-video" width="100%" height="auto" autoplay playsinline style="display: block; transform: scaleX(1);"></video>
                            <canvas id="nexra-canvas" style="display: none;"></canvas>
                            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 2px solid #17a2b8; width: 75%; height: 45%; box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.6); pointer-events: none; border-radius: 6px;">
                                <div style="position: absolute; top: 0; left: 0; border-top: 4px solid #00fcff; border-left: 4px solid #00fcff; width: 15px; height: 15px; margin: -2px;"></div>
                                <div style="position: absolute; top: 0; right: 0; border-top: 4px solid #00fcff; border-right: 4px solid #00fcff; width: 15px; height: 15px; margin: -2px;"></div>
                                <div style="position: absolute; bottom: 0; left: 0; border-bottom: 4px solid #00fcff; border-left: 4px solid #00fcff; width: 15px; height: 15px; margin: -2px;"></div>
                                <div style="position: absolute; bottom: 0; right: 0; border-bottom: 4px solid #00fcff; border-right: 4px solid #00fcff; width: 15px; height: 15px; margin: -2px;"></div>
                                <div style="position: absolute; width: 100%; height: 2px; background: rgba(0, 252, 255, 0.4); top: 0; animation: nexra-scan 2s linear infinite;"></div>
                            </div>
                        </div>
                        <style>
                            @keyframes nexra-scan { 0% { top: 0%; } 50% { top: 100%; } 100% { top: 0%; } }
                        </style>
                    `
                }
            ],
            primary_action_label: __('Tutup'),
            primary_action() { dialog.hide(); }
        });

        let streamKamera = null;
        let aktif = true;

        dialog.on_page_show = async function() {
            const video = document.getElementById('nexra-video');
            const canvas = document.getElementById('nexra-canvas');
            const context = canvas.getContext('2d', { alpha: false });

            try {
                streamKamera = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "environment", width: { ideal: 640 }, height: { ideal: 480 } }
                });
                video.srcObject = streamKamera;
            } catch (err) {
                frappe.msgprint(__('Gagal membuka kamera. Pastikan akses diberikan dan menggunakan HTTPS/Localhost.'));
                dialog.hide();
                return;
            }

            async function tick() {
                if (!aktif) return;
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    canvas.width = 320; // Downscaling ringan untuk menghemat CPU/RAM
                    canvas.height = (video.videoHeight / video.videoWidth) * 320;
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);

                    const hasil = await window.nexraBarcode.scanFromImage(canvas);
                    if (hasil && hasil.length > 0) {
                        const teks = hasil[0].text;
                        aktif = false;

                        // Audio Beep Pemindaian Ringan menggunakan Web Audio API (Tanpa Load File .mp3)
                        const ctx = new (window.AudioContext || window.webkitAudioContext)();
                        const osc = ctx.createOscillator();
                        osc.type = 'sine'; osc.frequency.setValueAtTime(1000, ctx.currentTime);
                        osc.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + 0.1);

                        if (callbackSukses) {
                            callbackSukses(teks);
                        } else {
                            // Handler Otomatis bawaan Backoffice
                            const fieldObj = frm.fields_dict[targetField];
                            if (fieldObj && fieldObj.df.fieldtype === 'Table') {
                                let row = frm.add_child(targetField);
                                row.barcode = teks;
                                row.uom = frm.doc.stock_uom || 'Nos';
                                frm.refresh_field(targetField);
                            } else {
                                frm.set_value(targetField, teks);
                            }
                        }
                        dialog.hide();
                        return;
                    }
                }
                requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        };

        dialog.on_hide = function() {
            aktif = false;
            if (streamKamera) {
                streamKamera.getTracks().forEach(track => track.stop());
            }
        };
        dialog.show();
    }
};

// Listener Form Utama Backoffice
$(document).on('app_ready', function() {
    frappe.ui.form.on('*', {
        refresh: function(frm) {
            frappe.db.get_doc('Nexra Barcode Setting')
                .then(setting => {
                    if (!setting || !setting.enabled || !setting.mappings) return;
                    const aturan = setting.mappings.find(m => m.document_type === frm.doctype);
                    if (aturan) {
                        suntikTombolUX(frm, aturan);
                    }
                }).catch(() => {});
        }
    });

    // INTEGRASI GLOBAL FRONT OFFICE: POS Awesome Interceptor
    $(document).on('ajaxComplete', function(event, xhr, settings) {
        if (settings.url.includes('posawesome')) {
            setTimeout(() => {
                suntikTombolPOSAwesome();
            }, 800);
        }
    });
});

/**
 * 4. UI/UX SUNTIKAN TOMBOL INTUITIF (Tepat di samping kolom input)
 */
function suntikTombolUX(frm, aturan) {
    if (aturan.use_case === 'Generate Preview') {
        if (frm.doc.item_code && frm.fields_dict[aturan.target_field]) {
            window.nexraBarcode.generateToSVG(frm.doc.item_code).then(svg => {
                if (svg) frm.get_field(aturan.target_field).$wrapper.html(svg);
            });
        }
    }

    if (aturan.use_case === 'Scan Input') {
        setTimeout(() => {
            const field = frm.get_field(aturan.target_field);
            if (!field) return;

            // Jika field input biasa, selipkan ikon kamera di sisi kanan kolom
            if (field.df.fieldtype !== 'Table') {
                const wrapper = field.$wrapper.find('.control-input-wrapper');
                if (wrapper.length && !wrapper.find('.btn-nexra-scan').length) {
                    wrapper.addClass('input-group');
                    const btn = $(`
                        <div class="input-group-append btn-nexra-scan">
                            <button class="btn btn-default" type="button" style="border-left:0; border-radius:0 4px 4px 0; background:#f8f9fa;">
                                <i class="fa fa-camera text-info"></i>
                            </button>
                        </div>
                    `);
                    wrapper.find('input').css('border-radius', '4px 0 0 4px').after(btn);
                    btn.find('button').on('click', () => window.nexraBarcode.bukaModalKameraGlobal(frm, aturan.target_field));
                }
            } else {
                // Jika field berbentuk Tabel Anak (seperti 'barcodes' di Item), taruh tombol elegan di atas tabel
                if (!field.$wrapper.find('.btn-nexra-table-scan').length) {
                    const header = field.$wrapper.find('.grid-heading-row');
                    const btnTable = $(`
                        <button class="btn btn-xs btn-info btn-nexra-table-scan" style="margin: 5px;" type="button">
                            <i class="fa fa-camera"></i> ${__('Scan Barcode Kamera')}
                        </button>
                    `);
                    field.$wrapper.prepend(btnTable);
                    btnTable.on('click', () => window.nexraBarcode.bukaModalKameraGlobal(frm, aturan.target_field));
                }
            }
        }, 300);
    }
}

/**
 * 5. HANDLER KASIR POS AWESOME (Front Office Injection)
 */
function suntikTombolPOSAwesome() {
    const posSearchWrapper = $('.search-item-field'); 
    if (posSearchWrapper.length && !$('.btn-nexra-pos').length) {
        posSearchWrapper.parent().addClass('input-group');
        const posBtn = $(`
            <div class="input-group-append btn-nexra-pos">
                <button class="btn btn-primary" type="button" style="background:#17a2b8; border-color:#17a2b8; height: 100%;">
                    <i class="fa fa-camera"></i>
                </button>
            </div>
        `);
        posSearchWrapper.after(posBtn);
        posBtn.on('click', function() {
            // Jalankan scanner kamera dan tembak hasilnya langsung ke kolom pencarian item POSAwesome
            window.nexraBarcode.bukaModalKameraGlobal(null, null, function(teksHasilScan) {
                const inputPOS = $('.search-item-field input');
                inputPOS.val(teksHasilScan).trigger('focus');
                
                // Simulasikan penekanan tombol Enter otomatis agar barang langsung masuk keranjang belanja
                const e = $.Event('keydown', { keyCode: 13, which: 13 });
                inputPOS.trigger(e);
            });
        });
    }
}