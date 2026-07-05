const set = new Set([1,2,3,2,3,3,4,5,6]);
console.log(set); //removed Duplicates

const set1= new Set();
console.log(set1); //Emplty Set
set1.add("A");
set1.add("B");
set1.add("C");
console.log("After Add",set1);
set1.delete("C");
console.log("After Delete",set1);
console.log("check: ",set1.has("A")); // element exist or not
console.log("Set Size:",set1.size);
//ietarate
set1.forEach(val=>console.log(val));
set1.clear();
console.log("After Clear",set1);


