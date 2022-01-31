let objek = {
  nama: "penting yakin",
  telp: 12345678,

  buah: ["apel", "jeruk", "mangga"],

  coba: function () {
    return "coba function dalam objek";
  },

  bolehan: true,
  "tulis aja": 1234,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[1]);
console.log(objek.coba());
console.log(objek.bolehan);
console.log(objek["tulis aja"]);
