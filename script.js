document.getElementById("pizza-order-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let size = document.querySelector('input[name="size"]:checked').value;
    let toppings = document.getElementById("toppings-select").value;
    let price = 0;
    
    if (size === "small") {
        price += 7;
    } else if (size === "medium") {
        price += 10;
    } else if (size === "large") {
        price += 14;
    }
    
    if (toppings === "1") {
        price += 2;
    } else if (toppings === "2") {
        price += 3;
    }
    
    document.getElementById("total-price").innerHTML = "Total Price: $" + price.toFixed(2);
});