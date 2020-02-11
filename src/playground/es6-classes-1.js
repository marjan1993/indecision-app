/*
class Person {
    constructor(name = "Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return "Hi I am " + this.name + "!";
        //return `Hi I am ${this.name}!`;
        return `${this.name} is ${this.age} years old. `
    }
}

const me = new Person ("Marjan Khakian", 26);
console.log(me.getGreeting());

const otherMe = new Person ();
console.log(otherMe.getGreeting());
*/

/*
class Person {
    constructor(name = "Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return "Hi I am " + this.name + "!";
        return `Hi I am ${this.name}!`;
        
    }
    getDescription(){

        return `${this.name} is ${this.age} years old. `
    }
}

const me = new Person ("Marjan Khakian", 26);
console.log(me.getDescription());

const otherMe = new Person ();
console.log(otherMe.getDescription());
*/


/*
//add a sub_class

class Person {
    constructor(name = "Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return "Hi I am " + this.name + "!";
        return `Hi I am ${this.name}!`;
        
    }
    getDescription(){

        return `${this.name} is ${this.age} years old. `
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
       return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

         if (this.hasMajor()) {
            // description = description + ``;
            description += ` There major is ${this.major}`; // shorter code

         }

        return description;
    }

}

const me = new Student ("Marjan Khakian", 26, "Computer Engineering");
//console.log(me.hasMajor());
console.log(me.getDescription());

const otherMe = new Student ();
//console.log(otherMe.hasMajor());
console.log(otherMe.getDescription());
*/



class Person {
    constructor(name = "Anonymous", age=0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return "Hi I am " + this.name + "!";
        return `Hi I am ${this.name}!`;
        
    }
    getDescription(){

        return `${this.name} is ${this.age} years old. `
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
       return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

         if (this.hasMajor()) {
            // description = description + ``;
            description += ` There major is ${this.major}`; // shorter code

         }

        return description;
    }
}

// we can add homeLocation() function here like hasMajor() above function and it works
// and like down below we can add no method like homLocation() and still fine , it is up to you

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

          if (this.homeLocation) {
              greeting += ` I'm visiting from ${this.homeLocation}`; //shorter code
          }

        return greeting;
    }
        
    

}

const me = new Traveler ("Marjan Khakian", 26, "Computer Engineering", "Tehran");
console.log(me.getGreeting());

const otherMe = new Traveler (undefined, undefined, "Nowhere");
console.log(otherMe.getGreeting());
