try {
    console.log(result);
} catch (error) {
    console.log(error.message); //handle error
}

// throwing own error and handle the same

try {
    let age = 15;
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    console.log("Elligible");
} catch (error) {
    console.log(error.message); //handle error
}
