let user = {
    name: "sonam",
    rollNo: 45,
    isAdmin: true,
    marks: { phy: 34, chem: 45, bio: 56 },
    languages: ["hindi", "eng", "gujarati", "marathi"]
}
//to iterate an object
for (let key in user) {
    console.log(key, ":", user[key]);
}