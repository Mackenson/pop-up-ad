import React from 'react';
// import fullName from './components/FullName'

const Popup = props => {

  let handleExit = () => {
    confirm("Are you sure you don't want to see " + props.artist_name +"?");
    event.preventDefault();
    console.log("Form Submitted");
  }

  return(
    <div id="popup-box" onClick={handleExit}>
      <h1>You have won tickets to see {props.artist_name}</h1>
      <h4>Please enter your email so we can send you the tickets</h4>
      <input id="input-email" type="text" placeholder="Your email here" />
      <input id="input-submit" type="submit" value="CLAIM YOUR PRIZE" />


    </div>
  );
};

export default Popup;
