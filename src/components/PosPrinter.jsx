/*
 * Purpose:
 * React component that uses react states and core API to interface to request
 * positional data and display to user on frontend.
 * Programmer: Matas Noreika 26/04/10 15:19:37
*/

import React, { useState } from 'react';
import Core from '../Core';

export default function PosPrinter(props){
  //React state -> essential component based local memory to save states
  //between re-renderings
  // [] -> object deserialisation into a variable and setter method
  // Value in useState defines the default value
  const [responseMsg, setResponseMsg] = useState('response will appear here');
  //handler method for when button is pressed
  const buttonHandler = async () => {
    console.log("Pressed button");
    const res = await Core.Vessel.getPos();
    console.log(res);
    setResponseMsg(JSON.stringify(res));
  };
  return (
    <div>
      <button onClick={buttonHandler}> Click to print position </button>
      <p> {responseMsg} </p>
    </div>
  );
}
