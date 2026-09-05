// Dynamic Form

const fieldName1="email";
const value1="sonam@gmail.com";
const fieldName2="phone";
const value2="9876543210";

//dynamic object
const formData={
    [fieldName1]:value1,
    [fieldName2]:value2
}

console.log(formData);

//we will use this in React
//to use variable inside obj while creating property [] required