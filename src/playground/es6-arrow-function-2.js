//arguments object - no longer bound with arrow functions so we can't use arguments in es6

/*
const add = function (a, b) { // example for es5 functions
    return a + b;

};
console.log(add(8, 18));
*/

/*
//example for es5 functions with argument
const add = function (a, b) { // example for es5 arguments functions
    console.log(arguments);
    return a + b;

};
console.log(add(8, 18, 180));
*/

/*
//example for es6 arrow functions

const add = (a, b) => { //  so in es6 and  arrow functions we no longer have access to arguments
                        // if we need arguments we should use es5 functions
    console.log(arguments);
    return a + b;

};
console.log(add(8, 18, 180));
*/


//this keyword - also no longer bound with arrow functions so we can't use arguments in es6

/*
//with es5 functions
const user = {
    name: "Marjan",
    cities:["Nurabad", "Khorramabad", "Tehran"],
    printPlacesLived: function() {
        const that = this; // error:because this.name dose not work and undefined so we use that variable

        this.cities.forEach(function (city) {
           console.log(that.name + " has lived in " + city); // this.name replaced with that.name so it's work
        });
    }
};

user.printPlacesLived();
*/

/*
const user = {
    name: "Marjan",
    cities: ["Nurabad", "Khorramabad", "Tehran"],
    printPlacesLived: function () { // we can not remove es5 function and use arrow function here it says that cities is undefined because this arrow function dose not bound to "this.cities" value 
                                    //so it is no longer equal to the object, it's go up to parent scope which is global scope, that "user.cities" it indeed undefined
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });

    }
};

user.printPlacesLived();
*/

/*
const user = {
    name: "Marjan",
    cities: ["Nurabad", "Khorramabad", "Tehran"],
    printPlacesLived() { // we can not remove es5 function and use arrow function here it says that cities is undefined 
                                    // with this solution , we can use arrow function here
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city);
        });

    }
};

user.printPlacesLived();
*/

/*
//using map method
const user = {
    name: "Marjan",
    cities: ["Nurabad", "Khorramabad", "Tehran"],
    printPlacesLived() {   
        
        const cityMessages = this.cities.map((city) => {
            //return city + " !";
            return this.name + " has lived in " + city;
        });

         return cityMessages;

    }
};

console.log(user.printPlacesLived());
*/

/*
// same result but short syntax
const user = {
    name: "Marjan",
    cities: ["Nurabad", "Khorramabad", "Tehran"],
    printPlacesLived() {   
        
         return this.cities.map( (city) => this.name + " has lived in " + city);
    }
};

console.log(user.printPlacesLived());
*/

/*
const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy:2,
    multiply() {
        return this.numbers.map( (number) => {
            return number * this.multiplyBy;

        });
    }

}

console.log(multiplier.multiply());
*/

/*
// same result but short syntax
const multiplier = {
    numbers: [1, 2, 3, 4],
    numberBy: 2,
    multiply() {
        return this.numbers.map( (number) => number * this.numberBy);
    }
}

console.log(multiplier.multiply());
*/