function f1(){
    console.log("f1 executed");
}
function f2(){
    console.log("f2 executed");
}
function f3(){
    setTimeout(()=>{
        console.log("f3 executed");
    },0)
}
function f4(){
    console.log("f4 executed");
}
f1();
f2();
f3();
f4();