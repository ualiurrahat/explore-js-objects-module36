const student = {
    name: 'rahat',
    sub: 'eee',
    cgpa: 3.38,
    money: 500,
    exam: function () {
        console.log(this.name + " is participating in exam");
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

// we will borrow functions of student object for another object.
// then we will use them

const badam = {
    name: 'Badam Ali',
    money: 1000
};
// now borrowing  exam function from student object to use with badam object
// we can borrow a function of another object in 3 ways
// using functionName.call(),
// using functionName.apply(),
// using functionName.bind(),

student.exam.call(badam);
// call(ThisArg, ExistingArg) -> first we need to give whose (this) pointer will be used.
// call takes other parameters separated by comma, while applay takes them in an array
console.log(badam.money);
// calling treatDe using call()
const moneyReamining = student.treatDe.call(badam, 50, 10);
console.log(moneyReamining);
// calling treatDe using apply()
const moneyRemaining2 = student.treatDe.apply(badam,[30,10]);
console.log(moneyRemaining2);

// calling treatDe using bind()
// bind(): for a given function, creates another funciton having the same body as original
const treatFunciton = student.treatDe.bind(badam);
const taka = treatFunciton(100,10);
console.log(taka);
