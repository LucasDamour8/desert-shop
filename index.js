var desserts = [
    { id: 1, name: "Cake", price: 6, image: "images/cake.jpg" },
    { id: 2, name: "Brownie", price: 4, image: "images/brownie.jpg" },
    { id: 3, name: "Waffle", price: 5, image: "images/waffle.jpg" },
    { id: 4, name: "Tiramisu", price: 6, image: "images/tiramisu.jpg" }
];
var list = document.getElementById("dessert-list");
desserts.forEach(function (d) {
    list.innerHTML += "\n    <div class=\"card\">\n      <img src=\"".concat(d.image, "\" alt=\"").concat(d.name, "\">\n      <h3>").concat(d.name, "</h3>\n      <p>$").concat(d.price.toFixed(2), "</p>\n      <button onclick=\"addToCart(").concat(d.id, ", '").concat(d.name, "', ").concat(d.price, ")\">\n        Add to Cart\n      </button>\n    </div>\n  ");
});
