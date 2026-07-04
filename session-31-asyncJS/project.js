function login(password) {
    return new Promise((resolve, reject) => {
        if (password == "admin") {
            setTimeout(() => {
                resolve("Login Successful!")
            }, 2000)
        } else {
            setTimeout(() => {
                reject("Invalid Password!")
            }, 2000)
        }
    })
}

function getProfile() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: 101, name: "Sonam Soni" })
        }, 2000)
    })
}

function getMarks() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ Java: 90, JavaScript: 95, React: 85 })
        }, 1000)
    })
}

//  Use Above Created Functions in Portal'
async function studentPortal(password) {
    try {
        console.log("Opening Portal.....!");
        const loginStatus = await login(password);
        console.log(loginStatus);
        const student = await getProfile();
        console.log(student);
        const marks= await getMarks();
        console.log(marks);
    } catch (error) {
        console.log("Error occured: ",error);
    } finally{
        console.log("Portal Closed!");
    }
}

studentPortal("admin");
studentPortal("admin123");
// here you can see both methods portal executed parrellelly