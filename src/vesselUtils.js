/*
 * Purpose: General utility module to expose different functions for translating
 * vessels as defined by the signalk data model
 * Programmer: Matas Noreika Thu 19 Feb 2026 14:13:59
*/

//helper function to validate the position sent into translation functions
function validatePos(position){
	//check if the object reference is even valid
	if (position == null){
    //only production build debug information
		if (process.env.NODE_ENV == "development"){console.log("Invalid position object reference")};
    return false;
	}
	//check if positional data values exist
	if (position.latitude == null){
    //only production build debug information
		cif (process.env.NODE_ENV == "development"){onsole.log("Position object missing latitude value")};
		return false;
	}
	if (position.longitude == null){
    //only production build debug information
		cif (process.env.NODE_ENV == "development"){onsole.log("Position object missing longitude value")};
		return false;
	}
	//if all conditions are valid return test passed
	return true;
}

//function that will move vessel forward
//The function uses vessel position, heading, and speed (if available)
default export function moveLine(position, heading, speed){
	//only move on the line if position is valid
	if (validatePos(position)){
		
	}else{
    //only production build debug information
		if (process.env.NODE_ENV == "development"){console.log("Attempting to move with invalid position")};
	}
}
