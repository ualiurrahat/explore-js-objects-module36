const numbers = [18,1,5,24,30];
for(const number of numbers)
{
    console.log(number);
}
// 3 ways to get object values from properties
// 1. objectName[propertyName]
// 2. objectName['propertyName']
// 3. objectName[propertyVariable]


// 1. for of loop can not be used on objects
const bottle ={
    color:'gold',
    price:50,
    isCleaned:true,
    capacity:10
};

// ways to loop through an object
//1. unusual but easy way: do not practice this
const keys = Object.keys(bottle);
console.log("using for of over keys: ");
for(const key of keys)
{
    console.log(key + ": " + bottle[key]);
}

// 2. use for in loop: this is best practice
// note: run for in loop on object directly
console.log("using for in on objects:");
for(const key in bottle)
{
    console.log(key + ": " + bottle[key])
}

// 3. advanced way: use for of with object entries function
console.log("using for of with object entries function:");
for(const [key,value] of Object.entries(bottle))
{
    console.log(key + ": " + value);
}