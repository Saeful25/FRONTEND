
// rest operator untuk menggabungkan item / parameter menjadi satu 
function sum(...numbers){
    let hasil = 0;
    for(const number of numbers){
        hasil = hasil + number;
    }
    console.log(hasil);
}
sum(10,15,24,42,1,76);