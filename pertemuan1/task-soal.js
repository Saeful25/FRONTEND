/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  {
    name : "usro",
    age : 20,
    major : 'Web Depelopment'
  },
  {
    name : "udin",
    age : 19,
    major : 'Mobile Depelopment'
  },
  {
    name : "juned",
    age : 22,
    major : 'senior programer'
  },
  {
    name : "ismail",
    age : 21,
    major : 'direktur'
  },
  {
    name : "Rizki",
    age : 18,
    major : 'Manager'
  }

];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
 for(const user of users)console.log(user);
};

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
  users.push(user);
  console.log(`User ${user.name} berhasil ditambahkan!`);

};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index,user) => {
  users[index] = user;
  console.log(`User ${user.name} berhasil diupdate!`);
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  users.splice(index, 1);
  console.log(`User ${index} berhasil dihapus!`);

};
/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

function main() {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
