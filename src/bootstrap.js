/*
 * Purpose:
 * This file is used to load the AppPanel component outside of signalk
 * server. This has to be implemented to overcome the issue with eager
 * consumption, required module loads faster than shared dependencies
 * are loaded.
 * Programmer: Matas Noreika 26/03/05 00:43:47
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import AppPanel from './components/AppPanel';

function loadApp(){
  //anchor to which virtual dom will be loaded from
  //standard react format
  const domNode = document.getElementById('root');
  const root = createRoot(domNode);
  //renders the app panel onto the root in virtual dom
  //*Note: AppPanel exposes a react component
  root.render(React.createElement(AppPanel, null, null));
}

window.addEventListener('load', function(){
  console.log("document loaded!");
  loadApp();
});
