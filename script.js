javascript
let cart = [];
let total = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  total += price;
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp${item.price.toLocaleString("id-ID")}`;
    cartList.appendChild(li);
  });

  totalDisplay.textContent = "Rp" + total.toLocaleString("id-ID");
}
