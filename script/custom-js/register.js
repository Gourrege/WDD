 
'use strict'

var firstName = document.getElementById('getFirstName');
var lastName = document.getElementById('getLastName');
var address1 = document.getElementById('getAddress1');
var address2 = document.getElementById('getAddress2');
var eircode = document.getElementById('getEircode');
var city = document.getElementById('getCity');
var county = document.getElementById('countySelect');


var cardholder = document.getElementById('getCardholder');
var cardNumber = document.getElementById('getCardNumber');
var expiry = document.getElementById('getExpiry');
var cvv = document.getElementById('getCVV');

const registerStatus = document.getElementById('user-register');

function RegisterUser() {

    const newRegisterData = 
    {
        
        firstName: firstName.value,
        lastName: lastName.value,
        address1: address1.value,
        address2: address2.value,
        eircode: eircode.value,
        city: city.value,
        county: county.value,
        cardholder: cardholder.value,
        cardNumber: cardNumber.value,
        expiry: expiry.value,
        cvv: cvv.value,
    };

    console.log(newRegisterData);
    
    window.location.href = "shop.html";

}


