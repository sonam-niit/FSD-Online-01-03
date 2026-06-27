// setInterval(()=>{
//     console.log(new Date().toLocaleTimeString());

// },1000)

// Counter Demo
// let count = 1;

// setInterval(() => {
//         console.log(count);
//         count++;
// }, 1000)


// Otp Countdown
let seconds =15;
const timer = setInterval(()=>{
    console.log(`Resend OTP in ${seconds} Seconds`);
    seconds--;

    if(seconds<0){
        clearInterval(timer); //stops automatically
        console.log('Resend OTP'); 
    }
},1000)