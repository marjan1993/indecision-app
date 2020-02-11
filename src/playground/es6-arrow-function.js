//es5 Functions
const square = function (a) {
    return a * a;
}

console.log(square(9));

function square1(a) {
    return a * a;
}

console.log(square1(7));

//es6 Arrow Functions
const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(5));


//shorter code without return and has the same result
const squareArrow1 = (b) => b*b; 
console.log(squareArrow1(3));



/*
const getFirstName = (fullName) =>  {
    return fullName.split(" ")[0];    
}

 console.log(getFirstName("Marjan Khakian"));
*/

//same result but shorthand syntax for getFirstName

const getFirstName = (fullName) => fullName.split(" ")[0];// return the first item in the array
console.log(getFirstName("Marjan Khakian"));

/*
 const getLastName = (fullName) => {
     return fullName.split(" ")[1];
 }

 console.log(getLastName("Marjan Khakian"));
*/

//same result but shorthand syntax for getLastName

const getLastName = (fullName) => fullName.split(" ")[1]; //return the second item in the array
console.log(getLastName("Matjan Khakian"));


