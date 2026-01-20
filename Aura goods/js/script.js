let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart(){
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index)=>{
        total += item.price;

        cartItems.innerHTML += `
        <div>
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">Remove</button>
        </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

function removeItem(i){
    cart.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
