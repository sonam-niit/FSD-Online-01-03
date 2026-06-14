let user= {
    name: "sonam",
    rollNo:45,
    isAdmin:true,
    marks:{phy:34,chem:45,bio:56},
    languages:["hindi","eng","gujarati","marathi"],
    greet: function(){
        console.log("Welcome ",this.name);
    },
    test: function(){
        
    }
}

//accessing properties
console.log(user.languages); //dot notation
console.log(user['isAdmin']); //square bracket
user.greet(); //accessing behaviour
