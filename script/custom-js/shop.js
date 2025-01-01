// shop.js



var addtocart = document.getElementById('addtocart');
// add a listener for add to cart if such a button id is pressed
//addtocart.addEventListener("click", addToCart);


//localStorage.removeItem('allProductIdsInCart');
const productIdsInCart = JSON.parse(localStorage.getItem('allProductIdsInCart')) || [];

const itemId = addtocart.getAttribute('itemID');

console.log(productIdsInCart);


function addToCart(itemId) {
    productIdsInCart.push(itemId) 
    
    localStorage.setItem('allProductIdsInCart', JSON.stringify(productIdsInCart));
    var total=localStorage.getItem('checkout');


    total++;

    //total=0;
    localStorage.setItem('checkout',total);
    console.log(total);
    document.querySelector('#checkout').innerHTML=total;
}

