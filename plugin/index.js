/*
 * Purpose:
 * Central script that handles the plugin configuration.
 * Programmer: Matas Noreika 26/01/29 11:51:23
*/

module.exports = (app) => {
  const plugin = {
    id: "signalk-collision-detection",
    name: "Collision detection",
    start: (settings, restartPlugin) => {
      //start-up code goes here
      console.log("Recieved these settings: ", settings);
    },
    stop: () => {
      //close-up code goes here
    },
    schema: () => {
      properties: {
        //plugin configuration goes here
      }
    }
  }

  return plugin;
}
