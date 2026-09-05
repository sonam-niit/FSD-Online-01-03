function f1(){
    console.log("F1 triggered")
}
function f2(){
    setTimeout(()=>{console.log("F2 triggered")},1000);
    //I need to wait for 1 sec
}
function f3(){
    console.log("F3 triggered")
}
function f4(){
    console.log("F4 triggered")
}

f1();
f2();
f3();
f4();