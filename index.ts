interface Dessert {
  id: number;
  name: string;
  price: number;
  image: string;
}

const desserts: Dessert[] = [
  { id: 1, name: "Cake", price: 6, image: "images/cake.jpg" },
  { id: 2, name: "Brownie", price: 4, image: "images/brownie.jpg" },
  { id: 3, name: "Waffle", price: 5, image: "images/waffle.jpg" },
  { id: 4, name: "Tiramisu", price: 6, image: "images/tiramisu.jpg" }
];

const list = document.getElementById("dessert-list")!;

desserts.forEach(d => {
  list.innerHTML += `
    <div class="card">
      <img src="${d.image}" alt="${d.name}">
      <h3>${d.name}</h3>
      <p>$${d.price.toFixed(2)}</p>
      <button onclick="addToCart(${d.id}, '${d.name}', ${d.price})">
        Add to Cart
      </button>
    </div>
  `;
});
