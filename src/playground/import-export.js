// //import "./utils.js"; // "./" means current directory
//import subtract, { square, add } from "./utils.js";
 
// console.log("app.js is running");
// console.log(square(5));
// console.log(add(87, 56));
// console.log(subtract(100, 50));



// import isSenior, {isAdult, canDrink} from "./person.js";
// // 'isSenior' can be any name we like it's not important what is important is it position

// console.log(isAdult(18));
// console.log(canDrink(20));
// console.log(isSenior(65));


//importing npm Modules with validator

import validator from "validator";
console.log(validator.isEmail("test@gmail.com"));


//importing npm Modules with react

import React from "react";
import ReactDOM from "react-dom";

const template = <p>This is JSX from Webpack</p>;
ReactDOM.render(template, document.getElementById("app"));
