const myButton= document.getElementById("myButton"); // getting my button id
const label1 = document.getElementById("myLabel1");
const label2 = document.getElementById("myLabel2");
const label3 = document.getElementB   yId("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min; // rolls a random number..... math.floor rounds it.
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum;
}
//1:15:00






/*

const min = 50;
const max =100;






let randomNum = Math.floor(Math.random() * (max-min)) + min; // this will generate a random number between 0 and 1... Multipling 6 will give us a number between 0-6 exclusive. 
// math.floor will help us not get decimals. now it will give 1-5
// now it'll be 1-100 instead of 1-6

// but i want 1-6 so i increase the minimum by adding 1
console.log(randomNum);

//1:05:00

*/