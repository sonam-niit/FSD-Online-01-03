const array = [35,56,89,46,78,65];

//check all students pass or not

const res=array.every(value=>value>=35);
console.log(res); //this checks for all to get true

const res1= array.some(value=>value>=85);
console.log(res1); // this checks for atleast 1 to get true


//on every() blank array [] returns true