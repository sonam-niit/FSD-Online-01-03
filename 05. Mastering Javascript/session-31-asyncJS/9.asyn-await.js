function withdraw(balance, amount) {
    return new Promise(function (resolve, reject) {
        if (amount <= balance) {
            resolve(balance - amount)
        } else {
            reject("Insufficient balance");
        }
    })
    //above function returning promise
}

async function getData(balance,amount) {
    try {
        const result = await withdraw(balance,amount);
        console.log("Remaining Balance:", result);
    } catch (error) {
        console.log(error);
    }
}

getData(5000,3000);
getData(5000,7000);