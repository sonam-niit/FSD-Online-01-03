//javascript Object
const person = {
    name: "Sonam Soni",
    age: 45,
    email: "sonam@gmail.com"
}
const jsonObj = JSON.stringify(person); //convert JSON

console.log("JS Object",person);
console.log("JSON Object",jsonObj);

//create JSON Data which always written as string
const schoolData = `{"school": "Physics Wallah", "email": "support@pw.live",
 "students": [{  "name": "Alex"},{"name": "Devid" },{"name": "John"}]}`;

console.log(schoolData.email);

//convert to Javascript
const school= JSON.parse(schoolData);
console.log(school);


