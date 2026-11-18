var btnChiSono = document.getElementById("btn-chi-sono");
var boxChiSono = document.getElementById("box-chi-sono");

btnChiSono.addEventListener("click", function () {
  boxChiSono.hidden = !boxChiSono.hidden;
});

var btnPassioni = document.getElementById("btn-passioni");
var boxPassioni = document.getElementById("box-passioni");

btnPassioni.addEventListener("click", function () {
  boxPassioni.hidden = !boxPassioni.hidden;
});
