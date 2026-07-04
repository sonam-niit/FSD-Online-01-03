class Circle{
    constructor(radius){
        this.radius=radius;
    }
    //getter method
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

const obj= new Circle(5);
console.log(obj.area); //calls getter method no need to use ()
