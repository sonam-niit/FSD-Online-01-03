function withdraw(balance,amount){
    return new Promise(function(resolve,reject){
        if(amount<=balance){
            resolve(balance-amount)
        }else{
            reject("Insufficient balance");
        }
    })
    //above function returning promise
}

//handing function result promise using then catch
withdraw(5000,2000)
    .then(res=> console.log("Remaining Balance:",res))
    .catch(err=>console.log(err))
    .finally(()=>console.log("Operation Completed"))

withdraw(5000,8000)
    .then(res=> console.log("Remaining Balance:",res))
    .catch(err=>console.log("Error Occured",err))
    .finally(()=>console.log("Operation Completed"))