function check(value: string | number) {
    if (typeof value === "string")
        console.log(value.toUpperCase());
    else
        console.log(value * 5);
}

check("Hello");
check(45);

class Dog { bark() { console.log("Dog Barks") } }
class Cat { meow() { console.log("Cat Meow") } }

function makeSound(animal: Dog | Cat){
    if(animal instanceof Dog)
        animal.bark()
    else
        animal.meow()
}

makeSound(new Dog())
makeSound(new Cat())