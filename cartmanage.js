let cart = [];

function addToCart(id, name, price) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ id, name, price, qty: 1 });
  }
  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cartList");
  const count = document.getElementById("cartItems");
  const total = document.getElementById("totalPrice");
  const counter = document.getElementById("cartCount");

  list.innerHTML = "";
  let sum = 0;
  let qty = 0;

  cart.forEach(i => {
    sum += i.price * i.qty;
    qty += i.qty;
    list.innerHTML += `
      <div class="cart-item">
        ${i.name}
        <div>
          <button class="qty-btn" onclick="changeQty(${i.id}, -1)">−</button>
          ${i.qty}
          <button class="qty-btn" onclick="changeQty(${i.id}, 1)">+</button>
        </div>
      </div>
    `;
  });

  count.textContent = qty;
  counter.textContent = qty;
  total.textContent = "$" + sum.toFixed(2);
}

function confirmOrder() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }
  alert("Order confirmed 🎉");
  cart = [];
  renderCart();
}
