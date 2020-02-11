/*
let count = 0;
const addOne = () => {
  //count = count + 1 ;
  count++;
  //console.log("you clicked the +1 button!", count); // it just show in console.log not the screen
  renderCounterApp();
};
const minusOne = () => {
     count--;
     //console.log("you clicked the -1 button!", count); //it just show in console.log not the screen
     renderCounterApp();
};

const reset = () => {
    count = 0;
    //console.log("you clicked the reset button!", count); //it just show in console.log not the screen
    renderCounterApp();
};


const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>

);

ReactDOM.render(templateTwo, appRoot); 

};

renderCounterApp();
*/

// rewriting the code using component state that we will from now on

class Counter extends React.Component {
     constructor(props) {
       super(props);
       this.handleAddOn = this.handleAddOn.bind(this);
       this.handleMinusOn = this.handleMinusOn.bind(this);
       this.handleReset = this.handleReset.bind(this);
       this.state = {
         count: 0
         //count: props.count
       };
     }
     componentDidMount() {
      try {
        const stringCount = localStorage.getItem("count");
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) { // if it is a number then condition sill be true
            this.setState(() => ({ count })); // {options: options} same result but we used shorthand way
       }
       } catch(e){
         //Do nothing at all
       }
     }
     componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) { //only if prevState.count is not equal to current count which is this.state.count
         localStorage.setItem("count", this.state.count); // "count" is the key and {this.state.count} is the value like this (key, value)
      }
     }
     handleAddOn() {
       this.setState((prevState) => { // update anonyms function
           return {
              count: prevState.count + 1
           };
       });
     }
     handleMinusOn() {
       this.setState((prevState) => { // update anonyms function
           return {
             count: prevState.count -1
           };
       });
     }
     handleReset() {
       this.setState(() => { // update anonyms function
         return {
           count: 0
         };
       });
      //  this.setState((prevState) => {
      //     return {
      //        count: prevState.count + 1
      //     };
      //  });
     }
     render() {
       return(
         <div>
             <h1>Count: {this.state.count} </h1>
             <button onClick={this.handleAddOn}>+1</button>
             <button onClick={this.handleMinusOn}>-1</button>
             <button onClick={this.handleReset}>reset</button>
         </div>
       );
     }  
}

// Counter.defaultProps = {
//     count: 0
// };
//ReactDOM.render(<Counter count={-7}/>, document.getElementById("app"));

ReactDOM.render(<Counter />, document.getElementById("app"));
//ReactDOM.render(What we want to render?, Where we want to render?); that's how we reference arguments 