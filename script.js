// Request a three-digit number from a user and check whether it has identical digits.

let digits = prompt("please add 3 digits");

let firstDigit = Math.floor(digits / 100);
let secondDigit = Math.floor((digits % 100)/10);  
let thirdDigit = digits % 10;  

alert(`${firstDigit}`);
alert(`${secondDigit}`);
alert(`${thirdDigit}`);

alert(`You have added ${digits}`);

