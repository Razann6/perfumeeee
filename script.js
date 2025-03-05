document.addEventListener("scroll", function() {
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let position = product.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            product.style.transform = "translateY(0)";
            product.style.opacity = "1";
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");
    const cart = [];
    
    products.forEach(product => {
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.classList.add("add-to-cart");
        product.appendChild(addButton);
        
        addButton.addEventListener("click", function() {
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("p").textContent;
            cart.push({ name: productName, price: productPrice });
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} has been added to your cart! 🛒`);
        });
    });

    // User Authentication System
    const loginForm = document.createElement("div");
    loginForm.innerHTML = `
        <div class="login-container">
            <h2>Login / Register</h2>
            <input type="text" id="username" placeholder="Enter your username">
            <button id="login-btn">Login</button>
        </div>
    `;
    document.body.prepend(loginForm);
    
    const loginButton = document.querySelector("#login-btn");
    loginButton.addEventListener("click", function() {
        const username = document.querySelector("#username").value;
        if (username) {
            localStorage.setItem("user", username);
            alert(`Welcome, ${username}! 🎉`);
            loginForm.style.display = "none";
        } else {
            alert("Please enter a valid username!");
        }
    });
    
    // Check if user is already logged in
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
        loginForm.style.display = "none";
        alert(`Welcome back, ${savedUser}! 🎉`);
    }
});
