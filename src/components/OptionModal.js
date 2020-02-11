import React from "react";
import Modal from "react-modal";


// const OptionModal = () => {
//      return (
//    <Modal
//      isOpen={!!props.selectedOption} //the modal should be open or closed --> true means open in the screen and false means close, {!!props.selectedOption} is true boolean which means real boolean value not the boolean is true
//      onRequestClose = {props.handleClearSelectedOption}// takes a function and it calls that function when the user try to close the modal 
//      contentLabel="Selected Option" // it is not show up in the browser it only show up for users who have access 

//    >
//       <h3>Selected Option</h3>
//       {props.selectedOption && <p>{props.selectedOption}</p>}
//       <button
//          onClick={props.handleClearSelectedOption}
//       >Okay</button>
//    </Modal>
//  )};


// same result but shorthand syntax,we don't use return,so it is without =>{return()}; just =>(); will be use 

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption} //the modal should be open or closed --> true means open in the screen and false means close, {!!props.selectedOption} is true boolean which means real boolean value not the boolean is true
      onRequestClose = {props.handleClearSelectedOption}// takes a function and it calls that function when the user try to close the modal 
      contentLabel="Selected Option" // it is not show up in the browser it only show up for users who have access 
      closeTimeoutMS={200}
      className="modal"
    >
       <h3 className="modal__title">Selected Option</h3>
       {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
       <button
          className="button"
          onClick={props.handleClearSelectedOption}
       >Okay</button>
    </Modal>
);

Modal.setAppElement('body')
//Modal.setAppElement('#app') // this way will also work to clear the error console 

export default OptionModal;