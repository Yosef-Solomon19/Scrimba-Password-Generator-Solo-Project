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
    let passwordText = "";
    
    for(let i = 0; i <= 14; i++) {
        let randomCharacter = characters[Math.floor(Math.random()* 91)];
        passwordText += randomCharacter;
    }    
    
    console.log(passwordText.length);
    console.log(passwordText);    
    passwordGenerationLimit();

    displayPassword(passwordText);
}

// Function to prevent generating more than two passwords 
let passwordBtnCtn = 0
function passwordGenerationLimit () {
    passwordBtnCtn += 1; 
    if (passwordBtnCtn === 2) {
        passwordBtnEl.disabled;
    }
}

// Adding a <p> in a div with an existing class ? 
// const passwordEl = document.createElement('p');
// passwordEl.classList.add("password-section", "password-genereation-section","text-password" );
// passwordEl.textContent = "test3";
// const passwordText = document.querySelector(".password-genereation-section");
// passwordText.appendChild(passwordEl);


// function to add an element with the password 
function displayPassword(passwordText){
    const passwordEl = document.createElement('p'); // Creates element by tagName
    passwordEl.classList.add("password-section", "password-genereation-section","text-password" ); // Adds existing classes to element 
    passwordEl.textContent = passwordText; // Adds the content into the element
    const passwordCharacters = document.querySelector(".password-genereation-section"); // Select element in HTML via class name
    passwordCharacters.appendChild(passwordEl); // Add element in HTML via DOM
}










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

// Task to do: Create function to genereate two random passwords when user clicks the button.
//             Each password should be 15 characters long.
// 


// useful URLS 
// https://bobbyhadz.com/blog/javascript-create-element-with-class