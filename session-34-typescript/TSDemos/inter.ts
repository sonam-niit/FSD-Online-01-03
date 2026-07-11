// it tells what exist not how it works
interface car {
    model:string;
    start():void;
    stop():void;
}

//class provides actual implementation
class BMW implements car{
    model: string = "test1";
    start(): void {
        console.log("BMW Started")
    }
    stop(): void {
        console.log("BMW Stopped")
    }
}

//you can use it by creating Object