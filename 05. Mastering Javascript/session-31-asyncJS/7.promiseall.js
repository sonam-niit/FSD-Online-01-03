const p1 = Promise.resolve("HTML");
const p2 = Promise.resolve("CSS");
const p3 = Promise.resolve("Javascript");

Promise.all([p1,p2,p3])
.then(result=>console.log(result))
.catch(err=>console.log(err))
// Run all promises in Parrellel
//in case if any of the promise rejected all will rejected.