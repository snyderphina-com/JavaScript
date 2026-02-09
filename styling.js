let total= 150;
console.log("total:Ksh.",total);


//Color text in terminal
// Color codes
const reset = "\x1b[0m";
const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const cyan = "\x1b[36m";

// Example usage
console.log(green + "✔ Success" + reset);
console.log(red + "✖ Error" + reset);
console.log(yellow + "⚠ Warning" + reset);
console.log(cyan + "// DEBUG: balance = 150" + reset);
