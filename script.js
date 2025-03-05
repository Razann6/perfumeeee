document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
 
        const productImage = product.querySelector("img");
        productImage.style.display = "block"; 
        productImage.style.visibility = "visible"; 

 
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.classList.add("add-to-cart");

 \
        product.appendChild(addButton);
    });
});
