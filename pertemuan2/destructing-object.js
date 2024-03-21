const user ={
    name: 'Budi Santoso',
    age: 20,
    major :"informatict"
};

// destructing object berdasarkan key
// tidak bisa dicostume
// const {name ,age,major} = user;

const nama = user.name;
const umur = user.age;
const jurusan = user.major;
console.log(nama);
console.log(umur);