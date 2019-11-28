var darkgrey = document.querySelector(".button-color-darkgray");
var white = document.querySelector(".button-color-white");
var blue = document.querySelector(".button-color-blue");
var beige = document.querySelector(".button-color-beige");
var lightgrey = document.querySelector(".button-color-lightgrey");

var img = document.querySelector(".product-image");

darkgrey.addEventListener("click", function() {
  img.setAttribute("src", "images/produit-grisfonce.png");
});

white.addEventListener("click", function() {
  img.setAttribute("src", "images/produit-blanc.png");
});

blue.addEventListener("click", function() {
  img.setAttribute("src", "images/produit-bleu.png");
});

beige.addEventListener("click", function() {
  img.setAttribute("src", "images/produit-beige.png");
});

lightgrey.addEventListener("click", function() {
  img.setAttribute("src", "images/produit-grisclaire.png");
});
