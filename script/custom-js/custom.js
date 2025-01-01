// custom.js 
// some basic functionality for login, checkout, userdetails
// amend and supplement in your project as you see fit



// set the checkout figure
if (localStorage.getItem('checkout') == null) {  
    localStorage.setItem('checkout',0);
}
var checkout=localStorage.getItem('checkout');
document.querySelector('#checkout').innerHTML=checkout;

// run to update login/
var logout = document.getElementById('loginlogout');

// add a listener for add to cart if such a button id is pressed
logout.addEventListener("click", Logout);

function Logout() {

    // if user is logged in them log them out and redirect to home page
    var loggedin=localStorage.getItem('loggedIn'); 

    if (loggedin==1) {
        localStorage.setItem('loggedIn',0);
        window.location.href = "home.html";
    } else {
        window.location.href = "login.html";
    }
}


// check if user is logged in or logged out..
checkLoginStatus()

function checkLoginStatus() {

    
    var loggedin=localStorage.getItem('loggedIn'); 
    var element = document.getElementById("userdetails");
    if (loggedin==1) {
        // change the text from Login to Logout
        document.querySelector('#loginlogout').innerHTML="Logout";
        element.classList.remove("d-none");        
        element.classList.add("d-show");      
    } else{
        // use add to hide the display of User Details
        //element.classList.add("d-none");        
        //element.classList.remove("d-show");
        document.querySelector('#loginlogout').innerHTML="Login"; 
        element = document.getElementById("loginlogout");
        element.setAttribute("href", "login.html");
        var element = document.getElementById("userdetails");
        element.style.display = 'none';
    } 

}

let product =
     [
        { 
        "product_id" : "1",
        "product_name": "widget 1",
        "price": "12.50",
        "Images":
        {
            "img1":"Jacket1.png"
        }
        },
        {
        "product_id" : "2",
        "product_name": "widget 2",
        "price": "15.50"
        },
        { 
        "product_id" : "3",
        "product_name": "widget 3",
        "price": "22.50"
        }
        ,
        { 
        "product_id" : "4",
        "product_name": "widget 4",
        "price": "16.50"
        },
        { 
        "product_id" : "5",
        "product_name": "widget 5",
        "price": "17.50"
        },
        { 
        "product_id" : "6",
        "product_name": "widget 6",
        "price": "13.50"
        },
        { 
        "product_id" : "7",
        "product_name": "widget 7",
        "price": "17.50"
        },
        { 
        "product_id" : "8",
        "product_name": "widget 8",
        "price": "21.50"
        },
        { 
        "product_id" : "9",
        "product_name": "widget 9",
        "price": "9.50"
        },
        { 
        "product_id" : "10",
        "product_name": "widget 10",
        "price": "32.50"
        },
        { 
        "product_id" : "11",
        "product_name": "widget 11",
        "price": "21.50"
        },
        { 
        "product_id" : "12",
        "product_name": "widget 12",
        "price": "12.50"
        },
        { 
        "product_id" : "13",
        "product_name": "widget 13",
        "price": "19.50"
        },
        { 
        "product_id" : "14",
        "product_name": "widget 14",
        "price": "15.50"
        },
        { 
        "product_id" : "15",
        "product_name": "widget 15",
        "price": "13.50"
        }
    ]





