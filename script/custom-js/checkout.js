// checkout.js

var checkout = document.getElementById('buy-now');
// add a listener for add to cart if such a button id is pressed

var element = document.getElementById("payment-failure");
element.style.display = 'none';
var element = document.getElementById("payment-success");
element.style.display = 'none';

var loggedin=localStorage.getItem('loggedIn'); 
if (loggedin==0) {
    window.location.href = "login.html";  // redirect to login page
}
// add a listener so that we run this code and preventdefault for submit...
checkout.addEventListener("click", () => {
    event.preventDefault();
    var cardnumber=document.getElementById('cardNumber').value;
    var cardcvv=document.getElementById('cardCvv').value;

    if (cardnumber=="1234 5678 9102 3456" && cardcvv=="123") {
        alert("payment success");
        var element = document.getElementById("payment-failure");
        element.style.display = 'none';
        //element.classList.add("d-none"); // bootstrap hide
        var element = document.getElementById("payment-success");
        element.style.display = 'block';
        //element.classList.remove("d-none"); // bootstrap hide
        // now set cart total to zero
        var total=0;
        // makes sure that when we goto another page the total is zero 
        localStorage.setItem('checkout',total); 

    } else {
        alert("payment failure");
        var element = document.getElementById("payment-failure");
        element.style.display = 'block';
        var element = document.getElementById("payment-success");
        element.style.display = 'none';
        //element.classList.add("d-none");
        var element = document.getElementById("payment-failure");
        //element.classList.remove("d-none");
 
    }
    return false;  

    
    
})

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

let images= 
[
  '1 (1).png','1 (2).png','1 (3).png','1 (4).png','1 (5).png',
  '1 (6).png','1 (7).png','1 (8).png','1 (9).png','1 (10).png',
  '1 (11).png','1 (12).png','1 (13).png','1 (14).png','1 (15).png'
]

const productIdsInCart = JSON.parse(localStorage.getItem('allProductIdsInCart')) || [];
// if(allProductIdsSaved >= 0)
// {
//   cart = allProductIdsSaved
// }
console.log(productIdsInCart)
let counter = 0

productIdsInCart.forEach(p => {
  product.forEach(pr=>{
    if(pr.product_id == p){
      console.log(pr.Images.img1);
      console.log(`ID: ${pr.product_id}, Name: ${pr.product_name}, Price: $${pr.price}`);
      const card = document.createElement('div');
      card.setAttribute('class', 'card'); // Styling class for each card
  
      const productImage = document.createElement('img') //image for the cards
      productImage.src = `images/MensClothing/${pr.Images.img1}`;
    
      const productID = document.createElement('h1');
      productID.textContent = `${pr.product_id}`; // Set the title for each card
  
      const Price = document.createElement('h2')
      Price.textContent = `${pr.price}`
  
      
      container.appendChild(card); // Append card to container
      card.appendChild(productImage)
      card.appendChild(productID); //Appends the data to each card
      card.appendChild(Price)
      //counter++
    }

  })

});


//Function to sort and print the Data
function createCards(images, p, counter)
{
  
    const card = document.createElement('div');
    card.setAttribute('class', 'card'); // Styling class for each card

    const productImage = document.createElement('img') //image for the cards
    productImage.src = "images/MensClothing/"+images[p.productID];
  
    const productID = document.createElement('h1');
    productID.textContent = `${p.product_id}`; // Set the title for each card

    const Price = document.createElement('h2')
    Price.textContent = `${p.price}`

    
    container.appendChild(card); // Append card to container
    card.appendChild(productID); //Appends the data to each card
    card.appendChild(Price)

}

