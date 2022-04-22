/* Daniel Hopper
ShoppingCart.js

Email - https://www.w3resource.com/javascript/form/email-validation.php
Credit card - https://stackoverflow.com/questions/40775674/credit-card-input-validation-using-regular-expression-in-javascript
*/

import { question } from 'readline-sync';

class ShoppingCart {
    constructor() {
        this.CheckOut = function() {

            let emailConfirmed = false;
            getEmail:
            while (emailConfirmed === false) {
                let validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
                console.log('\n');
                let getEmailAddress = question('Enter an email address: ');
                if (validateEmail.test(getEmailAddress) !== true) {
                    console.log('Invalid email address!');
                    continue getEmail;
                }
                emailConfirmed = true;
            }

            let creditCardConfirmed = false;
            getCreditCard:
            while (creditCardConfirmed === false) {
                let validateVisa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
                let validateMC = /^(?:5[1-5][0-9]{14})$/;
                let validateAmex = /^(?:3[47][0-9]{13})$/;
                let validateDiscover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
                console.log('\n');
                let getCreditCard = question('Enter a credit card number: ');
                if (validateVisa.test(getCreditCard) === true) {
                    creditCardConfirmed = true;
                }
                else if (validateMC.test(getCreditCard) === true) {
                    creditCardConfirmed = true;
                }
                else if (validateAmex.test(getCreditCard) === true) {
                    creditCardConfirmed = true;
                }
                else if (validateDiscover.test(getCreditCard) === true) {
                    creditCardConfirmed = true;
                }
                else {
                    console.log('Invalid credit card number!');
                    continue getCreditCard;
                }
            }
        };
    }
}

let myCart = new ShoppingCart();
myCart.CheckOut();
console.log('Thanks for shopping with us.');