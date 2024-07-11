const passBox = document.querySelector("#password");
const passLength = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%&*></~()";

const mixChar = upperCase + lowerCase + number + symbols

function createPass() {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];


    while(passLength > password.length){
        password += mixChar[Math.floor(Math.random() * mixChar.length)];
    } 

    passBox.value = password;
}


function copyPass() {
    passBox.select();
    navigator.clipboard.writeText(passBox.value);
    // document.execCommand("copy");
}



