/** https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes */
const object = { myVal: 'myVal'};
// console.log(object);
// const test = object.toString();
// console.log(test)

const date = new Date();
// console.log(date)
// let obj = date;
// do {
//     obj = Object.getPrototypeOf(obj);
//     console.log(obj);
// } while (obj);

const arr = new Array(1, 2, 3); // [1,2,3]
// console.log(arr);


/** https://chamikakasun.medium.com/javascript-prototype-and-prototype-chain-explained-fdc2ec17dd04 */
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.eat = function () {
    console.log(`${this.name} is eating.`)
}
Person.prototype.sleep = function () {
    console.log(`${this.name} is sleeping.`)
}
Person.prototype.walk = function () {
    console.log(`${this.name} is walking.`)
}
// console.log(new Person('Joe', 25));

class ClassPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class ActiveClassPerson extends ClassPerson {
    constructor(name, age) {
        super(name, age);
    }
    eat() {
        console.log(`${this.name} is eating.`)
    }
    sleep() {
        console.log(`${this.name} is sleeping.`)
    }
    walk() {
        console.log(`${this.name} is walking.`)
    }
}

console.log(new ActiveClassPerson('Joe', 25));