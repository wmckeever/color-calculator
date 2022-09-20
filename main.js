const prompt = require('prompt-sync')({sigint: true});

let colorDecision = prompt("Thank you for choosing to use the WDI 101 Color Calculator. Please choose to combine (c) or desonstruct (d)").toLowerCase();

console.log(`You chose: ${colorDecision}.`)

// If they choose to combine colors start here

if (colorDecision === "c"){

let color1 = prompt("Please choose your first color to combine: (red, blue, yellow:) ");
console.log(`Player one chose: ${color1}`);
 
let color2 = prompt("Please choose your second color to combine: (red, blue, yellow) ");
console.log(`Player one chose: ${color2}`);

if (color1 === "red" && color2 === "blue")
console.log("Your color combination is Purple!");

if (color1 === "red" && color2 === "yellow" )
  console.log("Your color combination is Orange!");

if(color1 === "blue" && color2 === "yellow" )
  console.log("Your color combination is Green!");

// If participant chooses deconstruct the following takes place

} else if(colorDecision === "d"){
let color3 = prompt("Please choose your color to deconstruct: (purple, orange, green:) ");
console.log(`Player one chose: ${color3}`);
 
if (color3 === "purple")
console.log("Your color combination Red and Blue!");

if (color3 === "orange")
console.log("Your color combination Red and Yellow!");

if (color3 === "green")
console.log("Your color combination Blue and Yellow!");

} else {
  (color1 !== typeof "string" || color2 !== typeof "string")
}
  console.log("Error");
