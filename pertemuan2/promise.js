function download(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Download Selama 3 Detik");
        }, 3000);

    });
};

function verify(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("verify.....");
        }, 2000);
        
    })
};

function notify(){
    console.log("Download Selesai");
};

function main(){
    
    // solusi callback hell yaitu menggunakan promise
    download().then((hasil)=> {
        console.log(hasil);

        verify().then((hasil) => {
            console.log(hasil);

            notify();
        }).catch((error) => {
            console.log(error);
        });
    });
}

// // then jika janjinya ditepati 
// // catch klo terjadi error
main();