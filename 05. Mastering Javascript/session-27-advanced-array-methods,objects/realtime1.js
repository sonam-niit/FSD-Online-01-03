const student = {
    name: "Sonam Soni",
    skills: ["JavaScript", "HTML", "CSS", "DevOps", "Database"],
    adrress: { city: "mumbai", state: "Maharastra"}
}

for (let key in student) {
    console.log("Key: ", key);
    let value = student[key]; 
    console.log("-----------------------------");
    if (Array.isArray(value)) {
        for (let val of value)
            console.log(val);
    } else if (typeof value === 'object') {
        for(let k in value)
            console.log(k,":",value[k]);
    }
    else {
        console.log(value);
    }
}