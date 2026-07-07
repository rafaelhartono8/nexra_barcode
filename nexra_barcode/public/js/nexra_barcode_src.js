// /home/rafael/Dev/nexra_one/frappe_docker/apps/nexra_barcode/nexra_barcode/public/js/nexra_barcode.js
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
     * 1. SCANNER
     * Dioptimalkan untuk memindai kode di lingkungan gudang yang menantang.
     */
    scanFromImage: async function(imageElement, customOptions = {}) {
        const defaultReaderOptions = {
            tryHarder: true,          
            maxNumberOfSymbols: 1,   
            formats: ['PDF_417', 'EAN_13', 'Code_128', 'QRCode', 'DataMatrix', 'ITF']
        };


        const finalOptions = { ...defaultReaderOptions, ...customOptions };

        try {
            const results = await readBarcodes(imageElement, finalOptions);
            return results;
        } catch (error) {
            console.error("Gagal membaca barcode:", error);
            return [];
        }
    },

    /**
     * 2. GENERATOR
     * Fleksibel untuk mencetak label rak gudang hingga keperluan enkripsi QRIS.
     */
    generateToSVG: async function(textToEncode, customOptions = {}) {
        const defaultWriterOptions = {
            format: 'Code_128',       
            scale: 3,                 
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
    }
};

// Listener Global Otomatis untuk Semua Form di ERPNext
$(document).on('app_ready', function() {
    frappe.ui.form.on('*', {
        refresh: function(frm) {
            // 1. Ambil data dari halaman pengaturan Nexra Barcode Setting (Frappe mengizinkan caching global)
            frappe.db.get_doc('Nexra Barcode Setting')
                .then(setting => {
                    if (!setting || !setting.enabled || !setting.mappings) return;

                    // 2. Cari apakah DocType yang sedang dibuka saat ini ada di dalam daftar tabel mapping
                    const aturanForm = setting.mappings.find(m => m.document_type === frm.doctype);

                    if (aturanForm) {
                        eksekusiFiturBarcode(frm, aturanForm);
                    }
                })
                .catch(err => {
                    // Berjalan senyap jika dokumen pengaturan belum dibuat
                    console.log("Nexra Barcode Setting belum dikonfigurasi.");
                });
        }
    });
});

// Fungsi Eksekutor Dinamis berdasarkan baris pengaturan UI
function eksekusiFiturBarcode(frm, aturan) {
    // Skenario A: Jika diatur sebagai GENERATOR PREVIEW BARCODE
    if (aturan.use_case === 'Generate Preview') {
        if (frm.doc.item_code && frm.fields_dict[aturan.target_field]) {
            window.nexraBarcode.generateToSVG(frm.doc.item_code).then(svgHtml => {
                if (svgHtml) {
                    frm.get_field(aturan.target_field).$wrapper.html(svgHtml);
                }
            });
        }
    }

    // Skenario B: Jika diatur sebagai KASIR / SCANNER INPUT KAMERA
    if (aturan.use_case === 'Scan Input') {
        // Cek agar tombol tidak duplikat saat form di-refresh berkali-kali
        if (!frm.wrapper.find('.btn-scan-barcode-kustom').length) {
            frm.add_custom_button(__('Tombol Scanner Kamera'), function() {
                // Panggil fungsi modal kamera yang sudah kita buat sebelumnya
                window.nexraBarcode.bukaModalKameraGlobal(frm, aturan.target_field);
            }, __('Aksi Barcode')).addClass('btn-scan-barcode-kustom');
        }
    }
};