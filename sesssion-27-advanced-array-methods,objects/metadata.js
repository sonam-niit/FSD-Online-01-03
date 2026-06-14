const person = {};

Object.defineProperty(person,"name",{
    value: "john",
    writable: true,
    enumerable: true,
    configurable:false
})

console.log(person);
delete person.name //fail silently and not giving any error
console.log(person);