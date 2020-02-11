console.log("utils.js is running");

export const square = (x) => x * x;

export const add = (a, b) => a + b;

// const subtract = (a, b) => a - b;
// export default subtract;

export default (a, b) => a - b; //shorthand way syntax


//2 types of exports : 1.default export 2.named export
//export { square, add, subtract as default };
