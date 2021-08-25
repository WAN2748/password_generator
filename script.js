// @ts-check
// Assignment Code
var upperConfirm;
var lowerConfirm;
var numConfirm;
var spCharConfirm;
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var spChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '+', '=', '_', '-', ';', ':', '{', '}', ''];
var allChar = upperLetters.concat(lowerLetters, numeric, spChar);
var selected;
var submit;


var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    var ps = generatePass();
    document.getElementById("password").placeholder = ps;
});

// Write password to the #password input
function generatePass() {
    submit = parseInt(prompt("please select how many characters in password, 8 and 128 characters"));
    if (!submit) {
        alert("Please select length of password.")

    }
    else if (submit < 8 || submit > 128) {
        submit = parseInt(prompt("Chose between 8 and 128"));

    } 
    else {

        upperConfirm = confirm("Would you like uppercase letters?");
        lowerConfirm = confirm("would you like lowercase letters?");
        numConfirm = confirm("Would you like numbers?");
        spCharConfirm = confirm("would you like special characters?");
    }
    //non selected
    if (!numConfirm && !upperConfirm && !lowerConfirm && !spCharConfirm) {
        alert("Must select with in the parameters")
        return (generatePass());
    }
    //all selected
    else if (upperConfirm && lowerConfirm && numConfirm && spCharConfirm) {
        selected = allChar
    }
    //three selected
    else if (upperConfirm && lowerConfirm && numConfirm && !spCharConfirm) {
        selected = upperLetters.concat(lowerLetters, numeric);
    }
    else if (upperConfirm && lowerConfirm && !numConfirm && spCharConfirm) {
        selected = upperLetters.concat(lowerLetters, spChar);
    }
    else if (upperConfirm && !lowerConfirm && numConfirm && spCharConfirm) {
        selected = upperLetters.concat(numeric, spChar);
    }
    else if (!upperConfirm && lowerConfirm && numConfirm && spCharConfirm) {
        selected = lowerLetters.concat(numeric, spChar);
    }
    //two selected
    else if (upperConfirm && lowerConfirm) {
        selected = upperLetters.concat(lowerLetters);
    }
    else if (upperConfirm && numConfirm) {
        selected = upperLetters.concat(numeric);
    }
    else if (upperConfirm && spCharConfirm) {
        selected = upperLetters.concat(spChar);
    }
    else if (lowerConfirm && numConfirm) {
        selected = lowerLetters.concat(numeric);
    }
    else if (lowerConfirm && spCharConfirm) {
        selected = lowerLetters.concat(spChar);
    }
    else if (numConfirm && spCharConfirm) {
        selected = numeric.concat(spChar);
    }
    //one selected
    else if (upperConfirm) {
        selected = upperLetters;
    }
    else if (lowerConfirm) {
        selected = lowerLetters;
    }
    else if (numConfirm) {
        selected = numeric;
    }
    else if (spCharConfirm) {
        selected = spChar;
    };

    var password = [];

    for (let i = 0; i < submit; i++) {
        var selectChar = selected[Math.floor(Math.random() * selected.length)];
        password.push(selectChar);
        console.log(password);
    }
    var pass = password.join("");
    input(pass);
    return pass;
    //var passwordText = document.querySelector("#password");
    //passwordText.value = password;
}

function input(pass) {
    document.getElementById("password").textContent = pass;
}