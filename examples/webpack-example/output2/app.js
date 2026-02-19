"use strict";

/*
 * Purpose:
 * This defines the main script that will render our webpage using our components found in ./components
 * Programmer: Matas Noreika 26/02/06 18:28:35
*/

//preform the rendering when the app loads
window.onload = function () {
  //create a root reference to render our virtual DOM onto our real DOM
  var root = ReactDOM.createRoot(document.getElementById('root'));
  //Render our Hello class and pass our name as a property (change the name to your liking)
  root.render(/*#__PURE__*/React.createElement(Hello, {
    name: "matas"
  }));
};