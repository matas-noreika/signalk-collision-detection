const path = require("path"); //path tool from node library
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html plugin to generate html file with all bundled files included
const { ModuleFederationPlugin } = require('webpack').container; //include the module federation plugin for webpack
const packJson = require('./package'); //reference to our npm package.json

module.exports = {
	//entry point to chain dependencies
  entry: {
    frontend: './src/frontend.js'
  },
  mode: 'development', //mode usually used to reduce computing for testing (also enables a environmental variable to control console logging)
	output: {
		path: path.resolve(__dirname, 'public'), //set our output to public directory
		filename: "[name].bundle.js", //uses substitution by name
    clean: true // cleans the folder prior building
	},
	resolve: {
		extensions: ['.tsx','.jsx','.js'] //files in order for which webpack will resolve
	},
	watchOptions: {
		ignored: '/node_modules/' // webpack prefers this over the plugin
	},
	plugins: [
		//this is the plugin that will expose our embedded web app to the server
		new ModuleFederationPlugin({
			name: 'frontend', // The entry from which we wish to expose from
			library: {type: 'var', name: packJson.name.replace(/[-@/]/g, '_')},
			exposes: {
				//components we wish to expose
				'./AppPanel': './src/components/AppPanel'
			},
      //define the shared modules (typically large dependencies like react)
      shared: [{react: {singleton: true, eager: true,requiredVersion: false}}]
			}),
		//use the plugin to generate a html file using the template provided
		new HtmlWebpackPlugin({
			template: './public_src/index.html'
		})
	]
}
