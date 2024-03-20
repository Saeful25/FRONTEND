// membuat objek : {} & new object()  tai paling sering pakai {}
const user = {
name: 'ucup',
age: 20,
major:"web development",
};

// mengakses nilai
console.log(user.name); // cara pertama  //in php : user->name
console.log(user["age"]); //cara kedua

// looping object menggunakan for in
// kalo di for in tidak bisa menggunakan titik (.) untk mengaksesnya harus menggunakan kurung siku[]
for(const key in user) console.log(user[key]); 