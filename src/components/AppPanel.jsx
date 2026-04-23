/*
 * Purpose:
 * definition of React Single Page App (SPA) that renders the
 * frontend interface to interact with services exposed by plugin
 * Programmer: Matas Noreika 26/03/07 17:09:14
*/

//import the Core API interface to communicate with underlying server
import Core from '../Core';
//imports react
import React from 'react';
//import OwnVesselForm component
import OwnVesselForm from './OwnVesselForm';
//import our PosForm component
//import PosForm from './PosForm';
//import our PosPrinter component
import PosPrinter from './PosPrinter';
import AddVesselForm from './AddVesselForm';

//props argument defines the properties to create the AppPanel with
//like classname, styling, etc.
const AppPanel = (props) => {// start of AppPanel
  //call method to optain vessel position in console
  //from signalk plugin
	return (
    <div>
      <h1> Collision Detection </h1>
      <p> The purpose of this webapp is to showcase how to develop an embeddable
        webapp on signalk as well as describe the Closest Point of Approach
        algorithm that is implemented on most modern chartplotters.</p>
      <PosPrinter />
      <OwnVesselForm />
      <AddVesselForm />
    </div>
  );
};//end of AppPanel

//Set the AppPanel react component (function)
// This the default return of the module when:
// import AppPanel from './AppPanel' is called
export default AppPanel;
