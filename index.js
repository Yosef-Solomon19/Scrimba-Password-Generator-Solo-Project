"use strict"; 

const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}",
"]",",","|",":",";","<",">",".","?","/"];

let passwordBtnEl = document.querySelector(".password-btn");

let randomCharacter = characters[Math.floor(Math.random()* 91)];
console.log(randomCharacter);

// Generate passwords 
function randomPasswords() {
    let passwordTextA = "";
    let passwordTextB = "";
    
    for(let i = 0; i <= 14; i++) {
        let randomCharacterA = characters[Math.floor(Math.random()* 91)];
        let randomCharacterB = characters[Math.floor(Math.random()* 91)];

        passwordTextA += randomCharacterA;
        passwordTextB += randomCharacterB;
    }    
    
    console.log(passwordTextA.length);
    console.log(passwordTextA);    
    console.log(passwordTextB.length);
    console.log(passwordTextB);
    // passwordGenerationLimit();

    displayPassword(passwordTextA, passwordTextB);
    
}

// Function to prevent generating more than two passwords 
// let passwordBtnCtn = 0
// function passwordGenerationLimit () {
//     passwordBtnCtn += 1; 
//     console.log(passwordBtnCtn);
//     if (passwordBtnCtn === 2) {
//         passwordBtnEl.disabled = true;
//     }
// }




// Create element globally instead of creating it inside displayPassword funciton
const passwordElA = document.createElement('p'); // Creates element by tagName
const passwordElB = document.createElement('p');

// function to add an element with the password 
function displayPassword(passwordTextA, passwordTextB ){
    passwordElA.classList.add("text-password" ); // Adds existing classes to element 
    passwordElA.textContent = passwordTextA; // Adds the content into the element
    
    const passwordCharacters = document.querySelector(".password-genereation-section"); // Select element in HTML via class name
    passwordCharacters.appendChild(passwordElA); // Add element in HTML via DOM

    passwordElB.classList.add("text-password" ); // Adds existing classes to element 
    passwordElB.textContent = passwordTextB;
    passwordCharacters.appendChild(passwordElB);
    // copyToClipBoard()
}

function copyToClipBoard() {
    const copyText = document.querySelector(".text-password")
    copyText.select();
    navigator.clipboard.writeText(copyText)
    // navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);

}






// Task to do: Create function to genereate two random passwords when user clicks the button.
//             Each password should be 15 characters long.
// 

// *** 20/7/2022 *** 
// What I've Accomplished 
// Compeleted the requiremnts:
// Build project from scratch 
// Generate two random passwords when user clicks the button
// Each password should be 15 characters long

// Working on: 
// copy on click feature 

// What I've learned 
// click events doesn't work with element that have been dynamically generated from js 
// Kinda learned how to create elements in js with: 
// .createElement('tagName')
//add existing class names w/ .classList.add('')
// add content with .textContent
// if you want to add an element in a div, create a variable and use DOM to select the class
// of the div. Then use divVaraible.appendChild(element to add into div)

// Problem
// How do I copy content of an element that was dynamicall created from js? 
// url references: https://stackoverflow.com/questions/6658752/click-event-doesnt-work-on-dynamically-generated-elements
// https://www.geeksforgeeks.org/how-to-create-copy-to-clipboard-button/



// Future development 
// Ability to set password length
// Toggle "symbols" & "numbers" on/off



// Three ways one with a onclick attribute in the element then the funtion 
// function passwordHit() {
//     passwordBtnEl.textContent="Hit";
// } 

// or 
// passwordBtnEl.onclick = function() {
//     passwordBtnEl.textContent="Hit";

// }
// or 
// passwordBtnEl.addEventListener("click", function() {
//     passwordBtnEl.textContent="Hit";
// })





// Useful URLS 
// https://bobbyhadz.com/blog/javascript-create-element-with-class

// Adding a <p> in a div with an existing class ? 
// const passwordEl = document.createElement('p');
// passwordEl.classList.add("password-section", "password-genereation-section","text-password" );
// passwordEl.textContent = "test3";
// const passwordText = document.querySelector(".password-genereation-section");
// passwordText.appendChild(passwordEl);