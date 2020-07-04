var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["@","%","+","'","!","#","$","?",":",".","(",")","{","}","[","]","~","`","_","-"];

function userInfo () {
  var length = parseInt(prompt("How Many Characters Would You Like in Your Password?"));
  if (length < 8){  
  alert ("Passwords Need to Be More Than 8 Characters");
  return;
} 
  if (length > 129){
    alert ("Passwords Need to be less than 128 Characters");
    return;
  }
 var lowerCase = confirm ("Would you like lowercase Characters?");
 var upperCase = confirm ("Would you like to use uppercase Characters?");
 var specialChar = confirm ("Would you like Special Charaters?"); 
 var numbers = confirm ("Would you like numbers?");
 if (lowerCase === false && upperCase === false && specialChar === false && numbers === false) {
   alert ("Please choose at least one type of character!!!!!!!");
   return;
 }
 var userOptions = {
   length: length,
   lowerCase: lowerCase,
   upperCase: upperCase,
   specialChar: specialChar,
   numbers: numbers,
 };
 return userOptions;
}
function generatePassword () {
var criteria = userInfo();
var results = [];
var options = [];
if (criteria.lowerCase === true) {
  options = options.concat(lowerCase); 
}
if (criteria.upperCase === true) {
  options = options.concat(upperCase);
}
if (criteria.specialChar === true) {
  options = options.concat(specialChar);
}
if (criteria.numbers === true) {
  options = options.concat(numbers);
}
if (criteria.length === true) {
  options = options.concat(length);
}
for (var i = 0; i < criteria.length; i++) {
  results.push(options[Math.floor(Math.random()*options.length)]);
}
return results.join("");
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
