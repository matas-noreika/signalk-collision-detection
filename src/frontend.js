/*
 * Purpose:
 * This generates a frontend that can be used for a testing environment.
 * Final bundle will only expose the appPanel.js.
 * Programmer: Matas Noreika 26/02/26 09:35:06
*/

//import react as it is a shared dependency and has to be present
import React from 'react';
//import react dom to render the virtual dom onto the real dom
import {createRoot} from 'react-dom/client';
//import the app panel component that is the main handler for the frontend
import AppPanel from './components/AppPanel';

window.onload = () => {

  console.log("Front end script running!");
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);

  //renders the app panel onto the virtual dom
  root.render(React.createElement(AppPanel, null, null));

};

