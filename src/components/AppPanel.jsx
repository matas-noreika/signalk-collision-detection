////////// ////////// ////////// //////////
// Matas Noreika 26/01/29 11:51:23
// This is the definition of the application panel component, 
// which is a React component that will be rendered in the 
// Signal K server's web interface when the plugin is installed 
// and enabled.


import SignalkCore from '../SignalkCore';
//imports react
import React, { useState } from 'react';

////////// ////////// ////////// //////////
// The AppPanel component is a simple React component that renders
// a heading element with some text.
// The props argument can be used to access any properties passed 
// to the component, such as the plugin settings or any data 
// from the Signal K server.
const AppPanel = (props) => {
  const [responseMsg, setResponseMsg] = useState('response will appear here');

  //generic debug console log to see properties passed
  console.log("passed properties: ", props);
  //function handler for when button is pressed
  const buttonHandler = async () => {
    const res = await SignalkCore.Vessel.getPos();
    setResponseMsg(JSON.stringify(res));
  }
  //call method to optain vessel position in console
  //from signalk plugin
	return (
    <div>
    <h1> Hello from react </h1>
    <button onClick={buttonHandler}> Click to print position </button>
    <p> {responseMsg} </p>
    </div>
  );
}
// end of AppPanel component definition
////////// ////////// ////////// //////////

export default AppPanel;
