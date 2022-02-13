/*
Name: Tarsem Bhachu
Date: Feb 11 2020
File-name: script.js
Description: This script writes a function that takes in input
to display number of steps for the Hee-Haw text.
 */

let input = document.getElementById("input");
let out = document.getElementById("out");
let btn = document.getElementById("activate");
btn.onclick = heeHaw;

function heeHaw() {

    let isValid = true;
    clearErrors();

    // Declare variable with user input
    let num = input.value;

    // Validate number in input field
    if (num < 0 || isNaN(num) || num === "") {
        document.getElementById("inputErr").style.display = "block";
        isValid = false;
    } else {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                out.innerHTML += "<p>Hee Haw!</p>";
            } else if (i % 3 === 0 && !i % 5 === 0) {
                out.innerHTML += "<p>Hee!</p>";
            } else if (i % 5 === 0 && !i % 3 === 0) {
                out.innerHTML += "<p>Haw!</p>";
            } else {
                out.innerHTML += i + "<br><br>";
            }
        }
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}