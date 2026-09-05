let date = new Date(); // Date Object
console.log("Full Date & Time ",date.toLocaleString());
console.log("Year ",date.getFullYear());
console.log("Month ",date.getMonth()); // 0-11
console.log("Day ",date.getDay());// 0 - sunday
console.log("date ",date.getDate()); // date value 31
console.log("Hour ",date.getHours());
console.log("Minutes ",date.getMinutes());
console.log("Seconds ",date.getSeconds());

let yob=2000;
console.log("Age: ", (date.getFullYear()-yob));


//write a function to calculate your age