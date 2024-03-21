function download(callbackVerify){
    setTimeout(() => {
        console.log("Download Selama 3 Detik");
        callbackVerify();
    }, 3000);
};

function verify(callbackNotify){
    setTimeout(() => {
        console.log("verify");
        callbackNotify();
    }, 2000);
};

function notify(){
    setTimeout(()=>{
        console.log("Download Selesai");
    },1000);
};

function main(){
    // solusinya :pakai callback biar berurutan
    download(function(){
        verify(function(){
            notify();
        });
    });
}

main();