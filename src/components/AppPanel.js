////////// ////////// ////////// //////////
// Matas Noreika 26/01/29 11:51:23
// This is the definition of the application panel component, 
// which is a React component that will be rendered in the 
// Signal K server's web interface when the plugin is installed 
// and enabled.
import React from 'react';

////////// ////////// ////////// //////////
// The AppPanel component is a simple React component that renders
// a heading element with some text.
const AppPanel = (props) => {
	// The props argument can be used to access any properties passed 
	// to the component, such as the plugin settings or any data 
	// from the Signal K server.
	return React.createElement('h1', null,'This is added with react');
} // end of AppPanel component definition
////////// ////////// ////////// //////////

////////// ////////// ////////// //////////
// make the AppPanel component available for import in other files,
// such as the index.js file where the plugin is defined.
export default AppPanel
////////// ////////// ////////// //////////
