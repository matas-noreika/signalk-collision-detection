/*
 * Purpose:
 * This generates a frontend that can be used for a testing environment.
 * Final bundle will only expose the appPanel.js which is then impoerted
 * using module federation by signalk server.
 * Programmer: Matas Noreika 26/02/26 09:35:06
*/

//import react as it is a shared dependency and has to be present
import React from 'react';
//import react dom to render the virtual dom onto the real dom
//*Note: Creates a virtual DOM on-top of our real DOM.
import {createRoot} from 'react-dom/client';
//import the app panel component that is the main handler for the frontend
//*Note: no extension is needed as webpack resolves the extension for us
import AppPanel from './components/AppPanel';

//Script is loaded as deferred meaning post loading
//thats why we want to add an event handler to execute our code
window.onload = () => {

  //anchor to which virtual dom will be loaded from
  //standard react format
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);

  //renders the app panel onto the root in virtual dom
  //*Note: AppPanel exposes a react component
  root.render(React.createElement(AppPanel, null, null));

};

