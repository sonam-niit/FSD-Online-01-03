class Parent{
    property(){
        console.log("Parent Properties");
    }
    greet(){
        console.log("Hello From Parent");
    }
}
class Child extends Parent{
    property(){
        super.property(); // extending parent method as well
        console.log("Child Properties");
    }
    greet(){
        console.log("Hello From Child");
    }
}

child = new Child();
child.greet(); 
// override parents property and use own which is called Method Override
child.property(); 