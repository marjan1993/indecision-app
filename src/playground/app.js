class IndecisionApp extends React.Component {
     constructor(props) { //calling bind method in the constructor
         super(props)
         this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
         this.handlePick = this.handlePick.bind(this);
         this.handleAddOption = this.handleAddOption.bind(this);
         this.handleDeleteOption = this.handleDeleteOption.bind(this);
         this.state = {
             options: []
           //options: props.options
           //["Thing One", "Thing Two", "Thing three"] 
          //[] in that case wha should i do button will be disabled
         };
        }
      componentDidMount() {
        try {
          const json = localStorage.getItem("options");
          const options = JSON.parse(json);

          if (options) {
              this.setState(() => ({ options })); // {options: options} same result but we used shorthand way
         }
        } catch(e) {
          //Do nothing at all
        }  
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem("options", json);
        }
      }
      componentWillUnmount() {
         console.log("componentWillUnmount")
      }
      handleDeleteOptions() {
          this.setState(() => ({ options: [] }));
      }
      handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
           options: prevState.options.filter((option) => { 
             return optionToRemove !== option; // we also can delete return{} from code for shorthand way
           })
        }))
      }
      // if we want to keep the item in the array then return must be true like optionToRemove === option and all item will be deleted except that item that we passed some data 
      //but i we don't want to keep the item in the array like this case then return must be true like optionToRemove !== option like we did in the code above for removing items
      handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(randomNum);
        alert(option)
      }
      handleAddOption(option) {
        if (!option) { //i is an empty string
           return "Enter a valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {// indexOf is zero base which means if array > -1 then we'll find a match in words
           return "This option is already exists"
        } //else {
        //   // we can put the setSate here or down ,it's valid in both ways
        // }
 
         this.setState((prevState) => ({ 
           options: prevState.options.concat(option) 
         }));
      }
     render() {
       const subtitle = "put your life in the hand of a computer!";
       return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
        />
        <Options 
           options={this.state.options}
           handleDeleteOptions={this.handleDeleteOptions}
           handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
           handleAddOption={this.handleAddOption}
        />
      </div>

       );
     }
}

// IndecisionApp.defaultProps = {
//      options: []
// };

const Header = (props) => {
  return (
    <div>
       <h1>{props.title}</h1>
       {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
    title: "Indecision"
};

const Action = (props) => {
  return (
    <div>
      <button 
         onClick={props.handlePick}
         disabled={!props.hasOptions}
       >
      What should i do?</button>
    </div>
  );
};


//in onClick = {this.handelPick}and {this.handelRemoveAll}we don't call the function like {this.handelRemoveAll()}
// we just reference it so we don't need function method 
//because when you cal function instead of reference it, it's get return value and the answer we be undefined and we won't be able to run our code


const Options = (props) => {
  return (
    <div>
       <button onClick={props.handleDeleteOptions}>Remove All</button>
       {props.options.length === 0 && <p>Please add an option to get started!</p>} 
       {
         //this.props.options.map((option) => <p key={option}>{option}</p>)             
         props.options.map((option) => (
          <Option 
              key={option} 
              optionText={option} 
              handleDeleteOption={props.handleDeleteOption}
          />
         )) 
       }
       <Option />
    </div>
  );
};


const Option = (props) => {
  return ( 
    <div>
      {props.optionText}
      <button 
        onClick={(e) => {
           props.handleDeleteOption(props.optionText);
        }}
      >
        Remove
      </button>
    </div>
  );
};

// class Option extends React.Component {
//     render() {
//       return ( 
//         <div>
//           {this.props.optionText}
//           {/*<AnotherOption/>*/}
//         </div>
//       );
//     }
// }


class AddOption extends React.Component {
     constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
          error: undefined
        }
     }
     handleAddOption(e) {
       e.preventDefault();//preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
       const option = e.target.elements.option.value.trim();//const option: will get and hold the value that usr typed in // trim() will remove white space from both sides of a string
       const error = this.props.handleAddOption(option);
       
       //same result but shorthand code
       this.setState(() => ({ error }));

       if (!error) { // this code we cause the input filed get clear after we type in some data 
          e.target.elements.option.value = ""; // option is name="option" in input form down below
       }
      }
      //  this.setState(() => {
      //    return {
      //      //error: error // we can use both ways because it has the same name
      //      error
      //    };
      //  });

     render() {
       return (
         <div>
            {this.state.error && <p>{this.state.error}</p>} 
            <form onSubmit={this.handleAddOption}>
              <input type="text" name="option"/>
              <button>Add Option</button>
            </form>
         </div>
       );
     }
}

/*
//stateless functional component example, stateless functions are faster than class based components so use it if you don't need to use class base component figures like state
const User = (props) => {
    return (
       <div>
         <p>Name: {props.name}</p>
         <p>Age: {props.age}</p>
       </div>
    );
};
//ReactDOM.render(<User name="Marjan" age={26}/>, document.getElementById("app"));
*/

//ReactDOM.render(<IndecisionApp options={["Jack", "Michel",  "Frodo"]}/>, document.getElementById("app"));

ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));
