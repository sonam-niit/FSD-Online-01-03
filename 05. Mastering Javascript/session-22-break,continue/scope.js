let name="Sonam Soni"; //global Scope

function test1(){
    let num=10; //local variable
    console.log("Name: ",name, "Number: ",num);
}

function test2(){
    console.log("Name: ",name);
    // console.log("Number: ",num); 
    // this line will give error
}

test1();
test2();

//global variable accessed in all function
// local variable is accessed to that function