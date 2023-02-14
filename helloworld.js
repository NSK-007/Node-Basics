console.log('Hello World!');

const product = (x, y) => x*y;

console.log(product(5,7));

const Student = {
    name : 'John',
    age : 19,
    school : 'Saint Paul',
    display(){
        console.log(`Hi! My name is ${this.name}, I am ${this.age} years old and I am studying in ${this.school}`)
    }
}

Student.display();

const arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

console.log(arr.map(ele => {
    if(ele==' ')
        return 'empty string';
    else
        return ele;
}))