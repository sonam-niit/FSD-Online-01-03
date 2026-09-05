class Vehical {
    constructor(
        protected brand: string,
        protected model: string
    ) { }
    start(){
        console.log(`${this.brand} ${this.model} Started`);
    }
}
class Car extends Vehical{
    constructor(
        brand: string,
        model: string,
        private fueltype:string
    ) { super(brand,model) }

    display(){
         console.log(`Brand: ${this.brand}, 
            Model: ${this.model}, Fuel: ${this.fueltype}`);
    }
}
const car= new Car("Toyota","Fortuner","Diesel")
car.display()
car.start()
