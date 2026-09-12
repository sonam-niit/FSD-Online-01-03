const fs= require("fs"); 
let s='Transaction: 1001, Amount: 5000\n'; 
fs.writeFileSync('large-file.txt',s.repeat(10000000));