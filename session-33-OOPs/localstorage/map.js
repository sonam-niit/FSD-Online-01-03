const map = new Map();

map.set('name','sonam');
map.set('email','sonam@gmail.com');
map.set('phone','9867543221');
console.log(map);
console.log(map.get('name'));//access value based on key
console.log(map.has('email'));//check key available or not
console.log("deleted: ",map.delete('phone'));
console.log("After Delete",map);

map.forEach(value=>console.log(value))// iterate value
//using key iterator
for(let key of map.keys())
    console.log(key,":",map.get(key));
    
//clear to clear entire map
// map.size to get size of keys
