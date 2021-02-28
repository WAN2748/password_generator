// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperLetters = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var spChar = ['!','@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '+', '='];

// Write password to the #password input
function writePassword() {
    var length = prompt("please select how many characters in password, 8 and 128 characters")
  if (length != null){
      document.getElementById("password")
      
  }
  if (length < 8 ) {
      alert("please select 8 to 128");
      return(writePassword());
      
  } else if (length > 128 ) {
      alert("please select 8 to 128");
      return(writePassword());
  }
  else { 
    
    upperConfirm = confirm("Would you like uppercase letters?");
    lowerConfirm = confirm("would you like lowercase letters?");
    numConfirm = confirm("Would you like numbers?");
    spCharConfirm = confirm("would you like special characters?")
}; 
//non selected
if (!numConfirm && !upperConfirm && !lowerConfirm && !spCharConfirm) {
    alert("Must select one or more parameters")
    return(writePassword());
}
//all selected
else if (upperConfirm && lowerConfirm && numConfirm && spCharConfirm) {
    selected = randomUpper.concat(randomLower, randomNumeric, randomSpChar);
}
//three selected
else if (upperConfirm && lowerConfirm && numConfirm && !spCharConfirm) {
    selected = randomUpper.concat(randomLower, randomNumeric);
}
else if (upperConfirm && lowerConfirm && !numConfirm && spCharConfirm) {
    selected = randomUpper.concat(randomLower, randomSpChar);
}
else if (upperConfirm && !lowerConfirm && numConfirm && spCharConfirm) {
    selected = randomUpper.concat(randomNumeric, randomSpChar);
}
else if (!upperConfirm && lowerConfirm && numConfirm && spCharConfirm) {
    selected = randomLower.concat(randomNumeric, randomSpChar);
}
//two selected
else if (upperConfirm && lowerConfirm) {
    selected = randomUpper.concat(randomLower);
}
else if (upperConfirm && numConfirm) {
    selected = randomUpper.concat(randomNumeric);
}
else if (upperConfirm && spCharConfirm) {
    selected = randomUpper.concat(randomSpChar);
}
else if (lowerConfirm && numConfirm){
    selected = randomLower.concat(randomNumeric);
}
else if (lowerConfirm && spCharConfirm){
    selected = randomLower.concat(spChar);
}
else if (numConfirm && spCharConfirm) {
    selected = randomNumeric.concat(randomSpChar);
}
//one selected
else if (upperConfirm){
    seleceted = randomUpper;
}
else if (lowerConfirm) {
    selected = randomLower;
}
else if (numConfirm) {
    selected = randomNumeric;
}
else if (spCharConfirm) {
    selected = randomSpChar;
}

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  



  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


var randomUpper = Math.floor(Math.random() * upperLetters.length);
console.log(randomUpper, upperLetters[randomUpper]);

var randomLower = Math.floor(Math.random() * lowerLetters.length);
console.log(randomLower, lowerLetters[randomLower]);

var randomNumeric = Math.floor(Math.random() * numeric.length);
console.log(randomNumeric, numeric[randomNumeric]);

var randomSpChar = Math.floor(Math.random() * spChar.length);
console.log(randomSpChar, spChar[randomSpChar]);

/*var randomArray = [randomUpper, randomLower, randomNumeric, randomSpChar],
for(let i = 0 <randomArray.length; i++){
    console.log(randomArray[i]);
}*/