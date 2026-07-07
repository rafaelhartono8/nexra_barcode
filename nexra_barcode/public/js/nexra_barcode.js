// /home/rafael/Dev/nexra_one/frappe_docker/apps/nexra_barcode/nexra_barcode/public/js/nexra_barcode.js
import { setWasmLocateUrl, readBarcodes, writeBarcode } from 'zxing-wasm/full';


setWasmLocateUrl('/assets/nexra_barcode/js/lib/zxing_full.wasm');

window.nexraBarcode = {
    /**
     * 1. SCANNER
     * Dioptimalkan untuk memindai kode di lingkungan gudang yang menantang.
     */
    scanFromImage: async function(imageElement, customOptions = {}) {
        const defaultReaderOptions = {
            tryHarder: true,          // Menguras akurasi ekstra untuk membaca barcode yang buram/kotor
            maxNumberOfSymbols: 1,    // Membatasi hanya 1 barcode per frame agar kasir checkout super cepat
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