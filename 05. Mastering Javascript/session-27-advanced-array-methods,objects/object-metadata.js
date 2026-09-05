const user = { name: "Sonam" };

console.log(Object.getOwnPropertyDescriptor(user, "name"));
//you can see here all metadata

const person = { };  //create blank object
Object.defineProperty(person, "name", {
    value: "Sonam",
    writable: false,
    enumerable: true,
    configurable: true
})
console.log(person); 
//try to change
person.name="John";
console.log(person); // still it shows sonam only
//because its not writable


