function orderFood(cb){
    setTimeout(()=>{
        console.log("Food Prepared");

        cb(); //call when food is ready
    },2000)
}

function deliverFood(){
    console.log("Food Delivered");
}

orderFood(deliverFood);