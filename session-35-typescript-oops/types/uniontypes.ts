let values: (number|string)[]= [10,"Hello",20,"typeScript"];
console.log(values);

type Status = "Pending" | "Approved" | "Rejected";
let orderStatus: Status;

orderStatus = "Approved";
console.log(orderStatus);

//  | means OR
// A variable can hold either type
