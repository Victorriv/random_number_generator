const myButton= document.getElementById("myButton"); // getting my button id
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;


myButton.onclick = function(){
    randomNum = Math.floor(Math.random * max) + min; // rolls a random number..... math.floor rounds it.
    
}
//1:11:50






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