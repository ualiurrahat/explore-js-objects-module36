const bottle ={
    color:'gold',
    price:50,
    isCleaned:true,
    capacity:10
};
// console.log(bottle);

// print object keys only
const keys = Object.keys(bottle);
console.log(keys);
// print values of keys only
const values = Object.values(bottle);
console.log(values);

// print key-value pairs
const pair = Object.entries(bottle);
console.log(pair);
// returns an array of array containing [key,value].

console.log(bottle);
// now deleting a key
delete bottle.isCleaned;
console.log(bottle); // isCleaned key deleted

bottle.quality = 'good';
console.log(bottle);


// seal(): object can not delete its keys, neither add new keys. just update the existing keys
Object.seal(bottle);
delete bottle.quality;
bottle.brand = 'pran';
bottle.price = 500;
console.log(bottle);
// see, quality key is not deleted, brand is not added,just price is updated.
// since we seal the bottle object

// freeze(): object can not delete, add or update any existing keys.
Object.freeze(bottle);
delete bottle.quality;
bottle.brand = 'pran';
bottle.price = 100;
console.log(bottle);

