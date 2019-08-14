export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    roar() {
        console.log(`Hi I'm ${this.name} and this is an ES6 template for MVC 5`);
    }
}