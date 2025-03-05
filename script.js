document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.classList.add("add-to-cart");
  
        const productImage = product.querySelector("img");
        
       
        product.appendChild(addButton);
    });
});
