// 1. create object using object literals 
const player = {};
// adding properties and methods for player objects
player.name = 'rahat';
player.profession = 'student';
player.work = function(){
    console.log("I am a web developer");
};

// console.log(player);
// player.work();

// 2. creating object directly
const hero = {
    age: 22,
    salary:3334343,
    job:"Action Hero",
    title: "The Great Tom Cruise"
};
// console.log(hero);

// 3. object constructor 
const person = new Object();
console.log(person);

// 4. object create method 
const ob = Object.create(null);
console.log(ob);

const bhai = Object.create(hero);
console.log(bhai); // shows that---> {}

//but check this one
console.log(bhai.age);
 // shows 22. and we set hero.age as 22
 // so when we print bhai object, it shows nothing but {}
 // then how it is showing bhai.age?
 // solution: by creating bhai from here, bhai has made a prototype chain with hero object
 // now hero is like working as parent of bhai
 // so if a property is searched over bhai, if it is there on hero object, it will show that
 // otherwise for any propertise that is not defined in hero object, it will show undefined.
 // for example, show the line below.
 console.log(bhai.marriage);
//  since there is no marriage property in hero, it shows undefined 

// 5. create object from class 
class Voter{
    name;
    age;
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    address = 'Bangladesh';
}

const shanto = new Voter('shanto', 21);
console.log(shanto);

// 6. create object from function 
function car(name,price)
{
    this.name = name;
    this.price = price;
}
const tesla = new car('tesla', 100);
console.log(tesla);