// Personal utility App
const read= require("readline-sync");

function calculateAge(yob){
    let date = new Date();
    return date.getFullYear()-yob;
}
function randomNumber(){
    return Math.floor(Math.random()*100)+1;
}
function showCurrentDateTime(){
    return new Date().toLocaleString();
}
function rollDice(){
    return Math.floor(Math.random()*6)+1
}

while(true){
    console.log("\n=======PERSONAL UTILITY APP======");
    console.log("1. Calculate Age");
    console.log("2. Random Number");
    console.log("3. Current Date & Time");
    console.log("4. Roll Dice");
    console.log("5. Exit");
    
    let input= read.question("Enter Your Choice");
    switch(Number(input)){
        case 1:
            let yob= read.question("Enter Your Year of birth");
            console.log("Age: ", calculateAge(yob),"Years");
            break;
        case 2:
            console.log("Random Number: ", randomNumber());
            break;
        case 3:
            console.log("date & time: ", showCurrentDateTime());
            break;
        case 4:
            console.log("Roll Dice: ", rollDice());
            break;
        case 5:
            process.exit();
        default:
            console.log("Enter Propr Choice");
    }
}