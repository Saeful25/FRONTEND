/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result - Nama file yang didownload
 */
showDownload = (result) => {
    console.log(`${result} Telah diDownload` );
}

/**
 * Fungsi untuk download file
 * @param {function} callback - Function callback show
 */

const download =() => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            result = 'windows.txt';
            resolve("Download Selesai");
        }, 2000);
    });
}
const main = async () =>{
   console.log(await download());
   showDownload(result);
}

main();

// download(showDownload);

/**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
