const user={
    greet(){
        return "hello"
    }
}

console.log("City:",user.address?.city);
console.log("ZipCode: ",user.address?.zip);
// with ? no errors without ? you can see errors

console.log(user.sayBye?.()); //returns undefined
console.log(user.greet?.()); //return hello

const array=[1,2,3,4]; //use in array
console.log(array?.[0]); //1
console.log(array?.[8]); //undefined

