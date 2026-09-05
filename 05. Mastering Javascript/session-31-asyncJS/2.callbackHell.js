console.log("Start");
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
            setTimeout(() => {
                console.log("Step 4");
                setTimeout(() => {
                    console.log("Step 5");
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
