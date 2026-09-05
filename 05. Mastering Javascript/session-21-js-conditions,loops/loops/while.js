let attempt = 1;

while (attempt <= 3) {
    console.log("Trying Password Attempt: ", attempt);
    attempt++;
}
console.log("Lock for 30 sec\n");

let battery = 20;

while (battery < 100) {
    console.log("Battery: ", battery + "%");
    battery += 20;
}

console.log("Battery Full")

// For Loop is used when no of iteration is known (Compact)
// While Loop is used when no of iteration is unknown (Simple Based on Condition)