/*
//so in var we can resign and redefine value 
var nameVar = "Ali";
//nameVar = "Mahtab";
var nameVar = "Mehdi";
console.log("nameVar", nameVar);
*/
//========================================

/*
//so in let we can resign but we can't redefine value

let nameLet = "Mohammad";
//nameLet = "Mahtab";
//let nameLet = "Mehran";
console.log("nameLet", nameLet);
*/
//============================================

/*
//so in const we can't resign OR redefine the value

const nameConst = "Maryam";
//nameConst = "Mahtab";
//const nameConst = "Mehran";
console.log("nameConst", nameConst);
*/

//=================================================

/*
// var are function scope
function getPetName() {
    var petName = "Puppy";//petName is scope to this fun not global scope
    //let petName = "Puppy";
    //const petName = "Puppy";
    return petName;
}

//getPetName();
//console.log(petName); //it will not work because petName is not available in parent global scope

var petName = getPetName();//it is work because we not try to access the petName in function but try to access petName in this scope
console.log(petName); 
*/

//================================================
//Block Scoping 
//with var we are gonna able  to access the variables outside of the code blocks
/*
var fullName = "Marjan Khakian";

if (fullName) {
    var firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
*/

//==============================================================================================
//but with const and let we are not gonna able  to access the variables outside of the code blocks
/*
var fullName = "Marjan Khakian";

if (fullName) {
    const firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
*/
/*
var fullName = "Marjan Khakian";

if (fullName) {
    let firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
*/

/*
 //here the solution work with let and var

var fullName = "Marjan Khakian";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
*/
//or we can use const and let as solution
/*
const fullName = "Marjan Khakian";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);
*/




