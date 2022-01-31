let tblmenu = [
  {
    idmenu: 1,
    idkategori: 1,
    menu: "Apel Manalgi",
    gambar: "apel.jpg",
    harga: 3000,
  },
  {
    idmenu: 2,
    idkategori: 2,
    menu: "Pisang",
    gambar: "pisang.jpg",
    harga: 7000,
  },
  {
    idmenu: 3,
    idkategori: 3,
    menu: "Ayam Goreng",
    gambar: "ayam goreng.jpg",
    harga: 10000,
  },
  {
    idmenu: 4,
    idkategori: 4,
    menu: "Burger",
    gambar: "burger.jpg",
    harga: 5000,
  },
  {
    idmenu: 5,
    idkategori: 5,
    menu: "Es Jeruk",
    gambar: "es jeruk.jpg",
    harga: 6000,
  },
  {
    idmenu: 6,
    idkategori: 6,
    menu: "Es Teh",
    gambar: "es teh.jpg",
    harga: 3000,
  },
];

let tampil = tblmenu.map(function (kolom) {
  return `<div class="produk-content">
        <div class="image">
          <img src="images/${kolom.gambar}" alt="" />
        </div>
        <div class="titel">
          <h2>${kolom.menu}</h2>
        </div>
        
        <div class="harga">
          <h2>Rp. ${kolom.harga}</h2>
        </div>

        <div class="btn-beli">
          <button data-idmenu=${kolom.idmenu}>Beli</button>
        </div>

      </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
  btnbeli[index].onclick = function () {
    //console.log(btnbeli[index].dataset["idmenu"]);
    //cart.push(btnbeli[index].dataset["idmenu"]);

    tblmenu.filter(function (a) {
      if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
        cart.push(a);
        console.log(cart);
      }
    });
  };
}

//console.log(cart);
