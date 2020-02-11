/*
let visibility = false;

const showDetailsApp = () => {
    visibility = !visibility;
     render();
};

const render = () => {
    const visibleToggle = (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={showDetailsApp}>
          {visibility ? "hide details" : "show details"}
          </button>
          {
            visibility && (
            <div>
            <p>Hey, this is some text for you!</p>
            </div>
            )
          }
        </div>
    );
    ReactDOM.render(visibleToggle, document.getElementById("app"));
};

render();
*/


// rewriting the code using component state that we will from now on

class VisibilityToggle extends React.Component {
    constructor(props) {
      super(props);
      this.handleToggleVisibility =  this.handleToggleVisibility.bind(this);
      this.state = {
        visibility: false
      }
    }
    handleToggleVisibility() {
      this.setState((prevState) => {
        return {
          visibility: !prevState.visibility
        };
      });
      }

    render() {
      return (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details" }</button>
           {this.state.visibility && (
             <div> 
               <p> Here, this is some text for you!</p>
             </div>
            )
            }
             
        
        </div>
      );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

