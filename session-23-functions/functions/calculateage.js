function calculateAge(yob){
    let date = new Date();
    return date.getFullYear()-yob;
}
function validVote(yob){
    let age = calculateAge(yob);
    if(age>=18)
        console.log("Valid for vote");
    else
        console.log("Not valid");
        
}

validVote(2000);
