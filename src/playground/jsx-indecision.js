console.log("App.js is running!");

//JSX JavaScript XML
/*
const template = (
 <div>
   <h1>This is JSX from app.js!</h1>
   <p>This is some text</p>
   <ol>
     <li>item one</li>
     <li>item two</li>
   </ol>
 </div>
 ); 

 const templateTwo = (
   <div>
     <h1>Marjan Khakian</h1>
     <p>Age:26</p>
     <p>Location:Iran,Tehran</p>
   </div>

 );
const appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
//template in JSX that we want to render
//appRoot is DOM element that i want to render it in index.html
//thats why i create a div with app ID in index.html to reference it 
*/

/*
const userName = "Marjan";
const userAge = 26;
const userLocation = "Iran";
const templateThree = (
  <div>
    <h1>{userName + "!"}</h1>
    <p>Age:  {userAge}</p>
    <p>location: {userLocation}</p>
  </div>
);
//OR we can use this too..... <h1>{userName.toUpperCase()}</h1>;

const appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
*/



/*
const user ={
  name:"Marjan",
  age:26,
  Location:"Iran"
}
const templateThree = (
  <div>
    <h1>{user.name}</h1>
    <p>Age:  {user.age}</p>
    <p>location: {user.Location}</p>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot
*/

/*
const app ={
  title:"My first web app",
  subtitle:"Hi! Welcome to my web app"
}

const templateOne = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateOne, appRoot);
*/


//================================================================

/*
//full function calls with if statements
const user = {
  name:"Marjan",
  age:26,
  
}

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return "Unknown";
  }
}

const templateThree = (
  <div>
    <h1>{user.name}</h1>
    <p>Age:  {user.age}</p>
    <p>location: {getLocation(user.location)}</p>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
*/

//=========================================================

/*
// The ternary conditional operator
//use when you want to do two or one thing
// if condition true then for example : use user.name if condition false then use :"Anonymous"
const user = {
  age:26,
  location:"Iran"
  
}

function getLocation(location) {
  if (location) {
    return <p>location: {location}</p>;
  } //else {
    //return undefined;
    //}
}

const templateThree = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    <p>Age:  {user.age}</p>
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
*/

//=========================================================

/*
//logical and operator 
// use when you want to do on thing or do nothing at all
//two condition must be true then the code will be run
const user = {
  name:"Marjan",
  //age:17,
  location:"Iran"
  
}

function getLocation(location) {
  if (location) {
    return <p>location: {location}</p>;
  } //else {
    //return undefined;
    //}
}

const templateThree = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateThree, appRoot);
*/
//=============================================================

/*
const app = {
  title:"My first web app",
  //subtitle:"Hi! Welcome to my web app",
  //options: ["One", "Two"]
  options: []
}

const templateOne = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0  ? "Here is your options" : "No String"}</p>
    <ol>
      <li>item one</li>
      <li>item two</li>
    </ol>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(templateOne, appRoot);
*/

/*
let count = 0;
const templateOne = (
  <div>
     <h1>Count: {count}</h1>
     <button id="my-id" className="button">+1</button>

  </div>
);
//console.log(templateOne);

const appRoot = document.getElementById("app");
ReactDOM.render(templateOne, appRoot);
*/

/*
let count = 0;
const someId = "my_id_here"
const templateOne = (
  <div>
     <h1>Count: {count}</h1>
     <button id={someId} className="button">+1</button>

  </div>
);
//console.log(templateOne);

const appRoot = document.getElementById("app");
ReactDOM.render(templateOne, appRoot);
*/

/*
let count = 0;
const addOne = () =>{
    console.log("you clicked the +1 button!");
};
const templateOne = (
  <div>
     <h1>Count: {count}</h1>
     <button onClick={addOne}>+1</button>

  </div>
);


const appRoot = document.getElementById("app");
ReactDOM.render(templateOne, appRoot);
*/

/*
let count = 0;
const minusOne = () => {
     console.log("you clicked the -1 button!");
};

const reset = () => {
    console.log("you clicked the reset button!");
};

const templateTwo = (
     <div>
       <h1>Count: {count}</h1>
       <button onClick={minusOne}>-1</button>
       <button onClick={reset}>reset</button>
     </div>

);

const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
*/


/*
// Forms and inputs

const app = {
  title:"My first web app",
  subtitle:"Hi! Welcome to my web app",
  options: []
}

const onFormSubmit = (e) => {
     e.preventDefault();
     //console.log("Form Submitted");

     const option = e.target.elements.option.value;
     if (option) {
       app.options.push(option);
       e.target.elements.option.value = ""; // it means clear whatever we typed in the form
       renderFormApp();
     }
};
 let option = 0;
const onRemoveButton = () => {
    //app.options.length = 0; // this is solution an it did work like the bottom code as well yesssss!
    app.options = [];
    renderFormApp();
};

const appRoot = document.getElementById("app");

const renderFormApp = () => {
  const templateOne = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0  ? "Here is your options" : "No String"}</p>
      <p>{app.options.length}</p>
      <button onClick= {onRemoveButton}>Remove All</button>
      <ol>
        <li>item one</li>
        <li>item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateOne, appRoot);

};

renderFormApp();
*/

/*
//019 Arrays in JSX
const app = {
  title:"My first web app",
  subtitle:"Hi! Welcome to my web app",
  options: []
}

const onFormSubmit = (e) => {
     e.preventDefault(); //preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
     //console.log("Form Submitted");
     const option = e.target.elements.option.value;
     if (option) {
       app.options.push(option);
       e.target.elements.option.value = ""; // it means clear whatever we typed in the form
       renderFormApp();
     }
};
 let option = 0;
const onRemoveButton = () => {
    //app.options.length = 0; // this is solution an it did work like the bottom code as well yesssss!
    app.options = [];
    renderFormApp();
};

const appRoot = document.getElementById("app");

const numbers = [23, 56, 500];

const renderFormApp = () => {
  const templateOne = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0  ? "Here is your options" : "No String"}</p>
      <p>{app.options.length}</p>
      <button onClick= {onRemoveButton}>Remove All</button>
       
      {
       // [12, 545, 5454, "Mari", null, undefined, true]
       //[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]

          numbers.map( (number) =>{
              //return number*2;
              return <p key={number}>Number: {number}</p>
          })
          
      }

      <ol>
        {
          app.options.map( (list) => <li key= {list}>{list}</li>)
        }
        
      </ol>
      <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateOne, appRoot);

};

renderFormApp();
*/


const app = {
  title:"My first web app",
  subtitle:"Hi! Welcome to my web app",
  options: []
}

const onFormSubmit = (e) => {
     e.preventDefault();
     //console.log("Form Submitted");

     const option = e.target.elements.option.value;
     if (option) {
       app.options.push(option);
       e.target.elements.option.value = ""; // it means clear whatever we typed in the form
       renderFormApp();
     }
};
 let option = 0;
const onRemoveButton = () => {
    //app.options.length = 0; // this is solution an it did work like the bottom code as well yesssss!
    app.options = [];
    renderFormApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    console.log(randomNum);
    alert(option)
};

const appRoot = document.getElementById("app");

const renderFormApp = () => {
  const templateOne = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0  ? "Here is your options" : "No String"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
    
      <button onClick= {onRemoveButton}>Remove All</button>

      <ol>
        {
          app.options.map( (list) => <li key= {list}>{list}</li>)
        }
        
      </ol>
      <form onSubmit={onFormSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(templateOne, appRoot);

};

renderFormApp();





















