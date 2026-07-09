// /home/rafael/Dev/nexra_one/frappe_docker/apps/nexra_barcode/nexra_barcode/public/js/nexra_worker_src.js
// nexra_worker.js - Thread Latar Belakang (Math Engine Decoder)
import { prepareZXingModule, readBarcodes } from 'zxing-wasm/reader';

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

let offscreenCanvas = null;
let offscreenContext = null;

// Mendengarkan kiriman potongan bitmap gambar dari thread utama UI
self.onmessage = async function(e) {
    const { type, bitmap, options } = e.data;

    if (type === 'scan' && bitmap) {
        // Inisialisasi kanvas virtual di memori latar belakang
        if (!offscreenCanvas) {
            offscreenCanvas = new OffscreenCanvas(bitmap.width, bitmap.height);
            offscreenContext = offscreenCanvas.getContext('2d', { alpha: false });
        }

        if (offscreenCanvas.width !== bitmap.width || offscreenCanvas.height !== bitmap.height) {
            offscreenCanvas.width = bitmap.width;
            offscreenCanvas.height = bitmap.height;
        }

        // Proyeksikan bitmap video ke kanvas virtual dan bersihkan memori GPU
        offscreenContext.drawImage(bitmap, 0, 0);
        bitmap.close(); 

        try {
            // Ekstrak representasi piksel ImageData murni sesuai standar dokumen resmi
            const dataPiksel = offscreenContext.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height);
            
            const defaultReaderOptions = {
                tryHarder: true,          
                maxNumberOfSymbols: 1,   
                formats: ['EAN_13', 'Code_128', 'QRCode', 'DataMatrix', 'ITF', 'PDF_417']
            };
            const finalOptions = { ...defaultReaderOptions, ...options };

            // Jalankan kalkulasi matriks biner di WebAssembly
            const hasil = await readBarcodes(dataPiksel, finalOptions);
            
            if (hasil && hasil.length > 0) {
                self.postMessage({ type: 'success', text: hasil[0].text });
            } else {
                self.postMessage({ type: 'empty' });
            }
        } catch (err) {
            self.postMessage({ type: 'empty' });
        }
    }
};