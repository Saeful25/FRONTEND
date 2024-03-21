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

// keyword asynch memberitahu bahwa ada operasi asyncronus di dalamnya
async function main(){
    // solusi penganti then dan catch dengan asyn await
    try {
        console.log(await download());
        console.log(await verify());
        notify();
    } catch (error) {
        console.log(error);
    }
    
}
main();