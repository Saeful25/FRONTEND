/*
* spread syntax digunakan untuk memisahkan array atau object menjadi satu item (sigle value)
* notasinya adalah ... (titik tiga)
*/

const fruits = [ "Apel","Anggur"];

const newFruits = [...fruits,"mangga","Lemon"];

console.log(...newFruits);


const user = {
name : "Budi Santoso",
major : "informatict",
}

const newUser ={
    ...user,
    age : 20,
}

console.log(newUser);