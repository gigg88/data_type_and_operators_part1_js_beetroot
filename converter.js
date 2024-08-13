// Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD, etc.) and gets the result. 

let usdAmount = parseFloat(prompt("Add your USD"));
let currency = prompt("Choose your currency (EUR, SEK, AUD)");

const usdToEur = 0.92;
const usdToSek = 10.53;
const usdToAud = 1.51;

let result;

if (currency === "EUR") {
  result = usdAmount * usdToEur;
} else if (currency === "SEK") {
  result = usdAmount * usdToSek;
} else if (currency === "AUD") {
  result = usdAmount * usdToAud;
} else {
  result = "Invalid currency";
}

alert(result);


