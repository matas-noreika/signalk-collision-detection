/*
 * Purpose:
 * definition of React Single Page App (SPA) that renders the
 * frontend interface to interact with services exposed by plugin
 * Programmer: Matas Noreika 26/03/07 17:09:14
*/

//import the Core API interface to communicate with underlying server
import Core from '../Core';
//imports react
import React, { useState } from 'react';
//import our PosForm component
import PosForm from './PosForm';

//props argument defines the properties to create the AppPanel with
//like classname, styling, etc.
const AppPanel = (props) => {// start of AppPanel
  //React state -> essential component based local memory to save states
  //between re-renderings
  // [] -> object deserialisation into a variable and setter method
  // Value in useState defines the default value
  const [responseMsg, setResponseMsg] = useState('response will appear here');
  //function handler for when button is pressed
  const buttonHandler = async () => {
    const res = await Core.Vessel.getPos();
    setResponseMsg(JSON.stringify(res));
  }
  //call method to optain vessel position in console
  //from signalk plugin
	return (
    <div>
    <h1> Hello from react </h1>
    <button onClick={buttonHandler}> Click to print position </button>
    <p> {responseMsg} </p>
    <PosForm />
    </div>
  );
};//end of AppPanel

//Set the AppPanel react component (function)
// This the default return of the module when:
// import AppPanel from './AppPanel' is called
export default AppPanel;
