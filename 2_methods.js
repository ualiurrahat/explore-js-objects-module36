const student = {
    name:'rahat',
    sub: 'eee',
    cgpa:3.38,
    exam: function(){
        console.log(this.name + " is participating in exam");
    },
    improve: function (subject){
        // calling a function inside this function
        this.exam();
        console.log(`${this.name} is taking improve exam on ${subject}`);
    }
};
console.log(student);
student.exam();
student.improve('signal');