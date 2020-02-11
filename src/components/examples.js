
import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp.js";


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));

class OldSyntax {
    constructor() {
        this.name = "Mari";
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi, my name is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

//---------------------using transform class properties

class NewSyntax {
    name = "Ali"; // it is (key value ) syntax 
    getGreeting = () => { // we did not use bind here because arrow function don't bind there own "this." values
        return `Hi, my name is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());



//-------------------------Passing Children to Component

// const Layout = (props) => {
//     return(
//         <div>
//           <p>Header</p>
//           {props.children}
//           <p>Footer</p>
//         </div>
//     );
// };

// ReactDOM.render((
//     <Layout>
//       <h1>Page Title</h1>
//       <p>This is my page</p>
//     </Layout>
// ), document.getElementById("app"));
