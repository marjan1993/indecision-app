import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
      options: [],
      selectedOption: undefined
    };
 handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
 }
 handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
};
 handleDeleteOption = (optionToRemove) => {
  this.setState((prevState) => ({
      options: prevState.options.filter((option) => { 
       return optionToRemove !== option; // we also can delete return{} from code for shorthand way
     })
  }))
 };
 handlePick = () => {
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNum];
  console.log(randomNum);
   this.setState(() => ({ // => ({}) in here means we directly return object no need to return here ,shorthand syntax 
       selectedOption : option
   }));
 };
  handleAddOption = (option) => {
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
     
render() {
      const subtitle = "put your life in the hand of a computer!";
      return (
     <div>
      <Header subtitle={subtitle} />
      <div className="container">
         <Action 
           hasOptions={this.state.options.length > 0} 
           handlePick={this.handlePick}
        />
        <div className="widget">
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
        handleAddOption={this.handleAddOption}
       />
      </div>
      </div>
      <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
       
       />
     </div>

      );
    }
}
