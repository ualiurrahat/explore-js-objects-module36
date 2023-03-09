// console.log(this); show window object

const student = {
    name: 'rahat',
    sub: 'eee',
    cgpa: 3.38,
    money: 500,
    exam: function () {
        console.log(this); // show student object
        console.log(this.name + " is participating in exam");
    },
    examArrow:() =>{
        console.log(this);
    },
    improve: function (subject) {
        // calling a function inside this function
        this.exam();
        console.log(`${this.name} is taking improve exam on ${subject}`);
    },
    treatDe: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    }
};

student.exam();
student.examArrow();

function clickButton()
{
    console.log(this);
}

// click handler on button 2
document.getElementById('btn-id').addEventListener('click', function(){
    console.log(this);
});


// in body of js file, this show window object
// inside regular function within a js object, this show the object
// inside arrow function within a js object, this show the window object
// clicked the button with onclick, then function call clickButton().....
// this show window object
// this keyword inside a DOM click event gives the DOM.