/*
 * Purpose:
 * Central script that handles the plugin configuration.
 * This is only used for Signalk refer to independent-core branch
 * for independent platforms.
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

module.exports = (app) => {//start of module.exports function

  // id allows the plugin to be identified and managed by the Signal K server
  // It is also the name used for API endpoints under /plugins/
  const PLUGIN_ID = "signalk-collision-detection";
  //human-readable name for the plugin, used in the UI
  const PLUGIN_NAME = "Collision detection";
  const start = (config, restartCallback) => {//start of start()
    //start-up code goes here
    // do nothing for now, just log the settings to the console
    console.log("Recieved these settings: ", settings);
    console.log("Vessel id: ", app.selfId);
  };//end of start()
  const stop = () => {//start of stop()

  };//end of stop()
  const schema = {
    type: 'object',
    properties: {//end of properties
      Radius: {//start of Radius property
        type: 'number',
        title: 'Detection radius (km) for collisions',
        default: 15
      } // end of Radius property
    } // end of properties
  };
  const getPos = (req, res) => {//start of getPos()
    const nav_data = app.getSelfPath("navigation");
    app.debug("navigation data: ", nav_data);
    try {
      //check if navigation data exists
      if (typeof nav_data == 'undefined') {
        throw new Error('Navigation data missing!');
      }
      //check if position is a member object of nav_data
      if (!nav_data.hasOwnProperty('position')) {
        throw new Error('Position data missing');
      }
      if (!nav_data.position.hasOwnProperty('value')) {
        throw new Error('value property missing in position data');
      }
      //send our position data
      app.debug("position data: ", nav_data.position.value);
      res.status(200).json(nav_data.position.value);
    } catch (error) {
      //Error objects don't parse like regular objects
      //JSON.stringify() returns, {} for errors
      app.debug(error);
      res.status(200).json({ message: error.message });
    }
  };//end of getPos()
  const setPos = (req, res) => {//start of setPos()
    app.debug(req.body);
    //send a delta message to server
    app.handleMessage(PLUGIN_ID, {
      updates: [{
        values: [{
          path: "navigation.position",
          value: {
            longitude: req.body.latitude,
            latitude: req.body.longitude
          }
        }]
      }]
    });
    //write data to signalk data model
    res.status(200).json({ message: 'position was set successfully!' });
  };//end of setPos()
  const plugin = {//start of plugin object
    id: PLUGIN_ID,
    name: PLUGIN_NAME,
    start: start,
    stop: stop,
    schema: schema,
    registerWithRouter: (router) => {// start of registerWithRouter
      //This is the definition of the exposed REST API by the plugin
      //The Core interfaces with this to enable an abstract interface
      router.get('/pos', getPos);
      router.post('/pos', setPos);
    }//end of registerWithRouter
  } // end of plugin object definition
  // return the plugin object to be used by the Signal K server
  return plugin;
} // end of module.exports function

