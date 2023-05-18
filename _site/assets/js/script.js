// Navbar 

function openNav() {
    document.getElementById('mySidebar').classList.toggle('nav-toggle');
    document.getElementById('main').classList.toggle('nav-toggle');
    document.getElementById('openbtn').classList.toggle('nav-toggle');
}

function toggleHtml(){
    document.getElementById("html-sub-menu").classList.toggle("expand-submenu");
    document.getElementById("html-nav-title").classList.toggle("expand-menu");
    document.getElementById('html-expand').classList.toggle('expand-icon');
}
function toggleCss(){
    document.getElementById("css-sub-menu").classList.toggle("expand-submenu");
    document.getElementById("css-nav-title").classList.toggle("expand-menu");
    document.getElementById('css-expand').classList.toggle('expand-icon');
}
function toggleJs(){
    document.getElementById("js-sub-menu").classList.toggle("expand-submenu");
    document.getElementById("js-nav-title").classList.toggle("expand-menu");
    document.getElementById('js-expand').classList.toggle('expand-icon');
}
function togglePlayground(){
    document.getElementById("pg-sub-menu").classList.toggle("expand-submenu");
    document.getElementById("pg-nav-title").classList.toggle("expand-menu");
    document.getElementById('pg-expand').classList.toggle('expand-icon');
}
function toggleOther(){
    document.getElementById("other-sub-menu").classList.toggle("expand-submenu");
    document.getElementById("other-nav-title").classList.toggle("expand-menu");
    document.getElementById('other-expand').classList.toggle('expand-icon');
}


// cart

        // Get all the "Add to Cart" buttons
        const addButtons = document.querySelectorAll(".add-to-cart");

        // Get the cart table body and the cart total element
        const cartBody = document.querySelector("#cart-body");
        const cartTotal = document.querySelector("#cart-total");
        
        // Initialize the cart items array and the cart total price
        let cartItems = [];
        let totalPrice = 0;
        
        // Add a click event listener to each "Add to Cart" button
        addButtons.forEach(function(button) {
          button.addEventListener("click", function() {
            // Get the product name and price from the button's data attributes
            const productName = button.getAttribute("data-name");
            const productPrice = parseFloat(button.getAttribute("data-price"));
        
            // Check if the product is already in the cart
            const existingCartItem = cartItems.find(function(item) {
              return item.name === productName;
            });
        
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
          cartItems = cartItems.filter(function(item) {
            return item.name !== productName;
          });
          renderCart();
        }
        
        // Render the cart table and the cart total
        function renderCart() {
          // Clear the cart table body
          cartBody.innerHTML = "";
        
          // Loop through the cart items and add them to the table body
          cartItems.forEach(function(item) {
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
            removeButton.addEventListener("click", function() {
              removeFromCart(item.name);
            });
            actionCell.appendChild(removeButton);
            row.appendChild(actionCell);
        
            cartBody.appendChild(row);
          });
        
          // Calculate the cart total and update the cart total element
          totalPrice = cartItems.reduce(function(total, item) {
            return total + item.total;
          }, 0);
          cartTotal.textContent = "$" + totalPrice.toFixed(2);
        }