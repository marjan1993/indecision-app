import React from "react";

export default class AddOption extends React.Component {
    state = {
      error: undefined
    }
    handleAddOption = (e) => {
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
           {this.state.error && <p className="add-option-error">{this.state.error}</p>} 
           <form className="add-option" onSubmit={this.handleAddOption}>
             <input className="add-option__input" type="text" name="option"/>
             <button className="button">Add Option</button>
           </form>
        </div>
      );
    }
}
