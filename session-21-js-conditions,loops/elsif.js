let per=prompt("Enter Your Percentage")
//prompt is used to take input from user
if(per>=90 && per<=100)
    console.log("Congratulations! You secured Excellent Class")
else if(per>=70 && per<90)
    console.log("Congratulations! You secured Distinction Class")
else if(per>=60 && per<70)
    console.log("Congratulations! You secured First Class")
else if(per>=50 && per<60)
    console.log("Congratulations! You secured Second Class")
else if(per>=35 && per<50)
    console.log("Congratulations! You secured Pass Class")
else if(per<35 && per>=0)
    console.log("Sorry You are Fail")
else 
    console.log("Please Enter Correct Result")

