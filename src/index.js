/*
 * Purpose:
 * Central script that handles the plugin configuration.
 * Programmer: Matas Noreika 26/01/29 11:51:23
*/

// The plugin must export a function that returns an object with 
// the following properties:
// id: a unique identifier for the plugin, used for installation and management
// name: a human-readable name for the plugin, used in the UI
// start: a function that is called when the plugin is started, it receives the plugin settings and a function to restart the plugin
// stop: a function that is called when the plugin is stopped, it should clean up any resources used by the plugin
// schema: a JSON schema that defines the configuration options for the plugin, used to generate the UI for configuring the plugin
// The plugin can also include any additional properties or methods as needed for its functionality.
// The plugin function receives the app object as an argument, which can be used to access the Signal K server and other plugins.


module.exports = (app) => {

  ////////// ////////// ////////// //////////
  // start defining the plugin object with the required properties 
  // and methods
  const plugin = {
    // required properties and methods
    // id allows the plugin to be identified and managed by the Signal K server
    id: "signalk-collision-detection",
    // himan-readable name for the plugin, used in the UI
    name: "Collision detection",

    // define the start method, which is called when the plugin is started. 
    // It receives the plugin settings and a function to restart 
    // the plugin as its two arguments.
    start: (settings, restartPlugin) => {
      //start-up code goes here
      // do nothing for now, just log the settings to the console
      console.log("Recieved these settings: ", settings);
      console.log("Vessel id: ",app.selfId);
      
    }, // end of start method

    // define the stop method, which is called when the plugin is stopped.
    // It should clean up any resources used by the plugin, 
    // such as closing connections or stopping timers.
    // For now, we will just log a message to the console when the plugin 
    // is stopped.
    // If we had subscribed to any data streams or set up any timers 
    // in the start method, we would need to clean those up here 
    // to prevent memory leaks
    stop: () => {
      //close-up code goes here
    }, // end of stop method

    // define the schema for the plugin settings, which is used 
    // to generate the UI for configuring the plugin. 
    // The schema should be a JSON object
    // While the configuration options for the plugin will depend 
    // on its functionality,
    // we will include a simple example of a configuration option 
    // for the detection radius.
    // Also, while the schema instructs the system to generate a UI
    // for configuring the plugin, we will not implement the actual
    // functionality of the plugin in this example, so the configuration 
    // option will not have any effect on the plugin's behavior.
    // Future versions may include more configuration options, 
    // such as the ability to enable or disable certain types of collision detection,
    // or to specify the types of vessels to monitor for collisions.
    // Also, Signal k is moving to a new UI framework, so the way the configuration options are defined
    // may change in the future, but for now we will use the current schema format.
    schema: {
      type: 'object',
      properties: {
        Radius: {
          type: 'number',
          title: 'Detection radius (km) for collisions',
          default: 15
        } // end of Radius property
      } // end of properties
    }, // end of schema
    registerWithRouter: (router) => {// start of registerWithRouter
      //create a GET endpoint to use as interface
      //for SignalkCore
      router.get('/pos', (req, res) => {//start of get pos
        const nav_data = app.getSelfPath("navigation");
        app.debug("navigation data: ", nav_data);
        try{
          //check if navigation data exists
          if(typeof nav_data == 'undefined'){
            throw new Error('Navigation data missing!');
          }
          //check if position is a member object of nav_data
          if(!nav_data.hasOwnProperty('position')){
            throw new Error('Position data missing');
          }
          if(!nav_data.position.hasOwnProperty('value')){
            throw new Error('value property missing in position data');
          }
          //send our position data
          app.debug("position data: ", nav_data.position.value);
          res.status(200).json(nav_data.position.value);
        }catch(error){
          //Error objects don't parse like regular objects
          //JSON.stringify() returns, {} for errors
          app.debug(error);
          res.status(200).json({message: error.message});
        }
      });//end of get pos
      router.post('/pos', (req,res) => {//start of post pos
        console.log(req.body);
        res.status(200).end();

      });//end of post pos
    }//end of registerWithRouter
  } // end of plugin object definition

  // return the plugin object to be used by the Signal K server
  return plugin;
} // end of module.exports function
// end of file
////////// ////////// ////////// //////////

