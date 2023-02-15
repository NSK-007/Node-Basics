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

//spread
const hobbies = ['Sports', 'Cooking'];
const hobbies2 = [...hobbies, hobbies[0]='Programming'];
console.log(hobbies)

//REST
const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4));


//destructuring
const {name, age} = Student;
console.log(name, age)

const [h1, h2] = hobbies2;
console.log(h1, h2);

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('c'), 3000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('d'), 0);
})

console.log('a')
console.log('b')
promise1
    .then((text) => {console.log(text); return promise2})
    .then((text) => console.log(text))
    .then(() => console.log('e'))

let x = async () => {
    console.log('a')
    console.log('b')
    let p1 = await promise1;
    let p2 = await promise2;
    console.log(p1);
    console.log(p2);
    console.log('e')
}
x();