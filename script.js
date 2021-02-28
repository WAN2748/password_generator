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
  if (length <= 8 -1 ) {
      alert("please select 8 to 128");
      
  } else if (length >= 128 +1 ) {
      alert("please select 8 to 128")
      return;
  }
  else { 
    confirm("Would you like numbers?");
    confirm("Would you like uppercase letters?");
    confirm("would you like lowercase letters?");
    confirm("would you like special characters?")
}
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  



  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());


