// $(document).ready(function () {
//   console.log("siap!");
// });

$(function () {
  $("#isi").html("<h1>Belajar jquery</h1>");

  $("button").click(function (e) {
    e.preventDefault();
    alert("belajar java script");
  });

  $("#isi").mouseleave(function () {
    alert("mouse leave");
    console.log("mouse");
  });
});
