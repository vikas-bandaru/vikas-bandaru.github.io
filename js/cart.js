document.addEventListener("DOMContentLoaded", function() {
// Get all the "Add to Cart" buttons
const addButtons = document.querySelectorAll(".add-to-cart");

// Get the cart table body and the cart total element
const cartBody = document.querySelector("#cart-body");
const cartTotal = document.querySelector("#cart-total");

// Initialize the cart items array and the cart total price
let cartItems = [];
let totalPrice = 0;

// Add a click event listener to each "Add to Cart" button
addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the product name and price from the button's data attributes
    const productName = button.getAttribute("data-name");
    const productPrice = parseFloat(button.getAttribute("data-price"));

    // Check if the product is already in the cart
    const existingCartItem = cartItems.find(
      (item) => item.name === productName
    );

    if (existingCartItem) {
      // If the product is already in the cart, increment the quantity
      existingCartItem.quantity++;
      existingCartItem.total = existingCartItem.quantity * productPrice;
    } else {
      // If the product is not in the cart, add it as a new item
      const cartItem = {
        name: productName,
        price: productPrice,
        quantity: 1,
        total: productPrice,
      };

      cartItems.push(cartItem);
    }

    // Update the cart table and the cart total
    renderCart();
  });
});

// Remove an item from the cart
function removeFromCart(productName) {
  cartItems = cartItems.filter((item) => item.name !== productName);
  renderCart();
}

// Render the cart table and the cart total
function renderCart() {
  // Clear the cart table body
  cartBody.innerHTML = "";

  // Loop through the cart items and add them to the table body
  cartItems.forEach((item) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = "$" + item.price.toFixed(2);
    row.appendChild(priceCell);

    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;
    row.appendChild(quantityCell);

    const totalCell = document.createElement("td");
    totalCell.textContent = "$" + item.total.toFixed(2);
    row.appendChild(totalCell);

    const actionCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn", "btn-danger");
    removeButton.addEventListener("click", () => {
      removeFromCart(item.name);
    });
    actionCell.appendChild(removeButton);
    row.appendChild(actionCell);

    cartBody.appendChild(row);
  });

  // Calculate the cart total and update the cart total element
  totalPrice = cartItems.reduce((total, item) => total + item.total, 0);
  cartTotal.textContent = "$" + totalPrice.toFixed(2);
}
});