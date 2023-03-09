const arr1 = [10, 20, 30, 40, 50];
const arr2 = [10, 20, 30, 40, 50];
// though arr1 and arr2 are same in value, but they are having different reference for location.
// so they are not same
const arr3 = arr2;
// here arr3 is assigned to arr2 reference. so both are pointing to same location.hence they are same


// array and objects are same if theire location are same

// if(arr1 === arr2)
// {
//     console.log("arr1 and arr2 are same");
// }
// else
// {
//     console.log("arr1 and arr2 are different");
// }

// if(arr2=== arr3)
// {
//     console.log("arr3 and arr2 are same");
// }
// else
// {
//     console.log("arr3 and arr2 are different");
// }


// how to compare two objects
const first = { a: 10, b: 20, c: 30 };
const second = { a: 10, b: 20, c: 25 };
const third = second;
// console.log(first === second ? "same" : "different");  // different
// console.log(third === second ? "same" : "different");  // same


// comparing two object: do not use this way.
// convert objects into string, then compare them
const firstString = JSON.stringify(first);
const secondString = JSON.stringify(second);
// console.log(firstString === secondString ? "same" : "different");


//function to compare two objects.
// best practice is to use google searched function to compare two objects.
// since objects can be pretty complex.

function compareObjects(first, second) {
    // first we check if both object has same number of length.
    // if true,
    //  then check if both have same keyc
    // if true, return true
    // else false
    // else,
    // return false
    if (Object.keys(first).length === Object.keys(second).length) {
        // keys length are same. now check for same keys
        const keys = Object.keys(first);

        for (const key of keys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
        // all keys are same. so object are similar
        return true;
    }
    else {
        return false;
    }
}


console.log(compareObjects(first, second));