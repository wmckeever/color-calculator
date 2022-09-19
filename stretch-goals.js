const prompt = require('prompt-sync')({sigint: true});


let colorDecision = prompt("Please choose two colors separated by a space: (red, blue or yellow) or a single color: purple, orange, green: ");

console.log(`You chose: ${colorDecision}.`)

if (colorDecision.includes("red blue")){
console.log("Your combined color is Purple.");

}else if (colorDecision.includes("blue red")){
console.log("Your color is Purple.");

}else if (colorDecision.includes("yellow blue")){
console.log("Your combined color is Green.");

}else if (colorDecision.includes("blue yellow")){
console.log("Your combined color is Green.");

}else if (colorDecision.includes("red yellow")){
console.log("Your combined color is Orange.");

}else if (colorDecision.includes("yellow red")){
console.log("Your combined color is Orange.");


}else if (colorDecision.includes("purple")){
console.log("Your combined colors are Red and Blue");


}else if (colorDecision.includes("orange")){
console.log("Your combined colors are Red and Yellow");

}else if (colorDecision.includes("green")){
console.log("Your combined colors are Blue and Yellow");

} else if(colorDecision !== "string"){
  
  console.log("Sorry, please choose from one of the available colors or sets of colors.")

}