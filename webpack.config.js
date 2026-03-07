const path = require("path"); //path tool from node library
const HtmlWebpackPlugin = require("html-webpack-plugin"); // html plugin to generate html file with all bundled files included
const { ModuleFederationPlugin } = require('webpack').container; //include the module federation plugin for webpack
const packJson = require('./package'); //reference to our npm package.json

module.exports = {
	//entry point to chain dependencies
  entry: './src/index',// reference to source file to build dependency chain from
  mode: 'development', //mode usually used to reduce computing for testing (also enables a environmental variable to control console logging)
	output: {
		path: path.resolve(__dirname, 'public'), //set our output to public directory
    clean: true // cleans the folder prior building
	},
	resolve: {
		extensions: ['.tsx','.jsx','.js'] //files in order for which webpack will resolve
	},
	watchOptions: {
		ignored: '/node_modules/' // webpack prefers this over the plugin
	},
  //define our loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/, //tests for .jsx extention
        loader: 'babel-loader', //define the target loader for match
        exclude: /node_modules/, //exclude our modules as they are prebuilt
        options: {
          presets: ['@babel/preset-react'] // babel settings, react
        }
      }
    ]
  },
	plugins: [
		//this is the plugin that will expose our embedded web app to the server
		new ModuleFederationPlugin({
      name: 'Collision Detection',
      library: {type: 'var', name: packJson.name.replace(/[-@/]/g, '_')},
      // defines the exposed module filename (signalk expects remoteEntry)
      filename: "remoteEntry.js",
			exposes: {
				//components we wish to expose (AppPanel -> webapp frontend)
				'./AppPanel': './src/components/AppPanel.jsx'
			},
      //define the shared modules (typically large dependencies like react)
      shared: [{react: {singleton: true,requiredVersion: false}},{'react-dom': {singleton: true,requiredVersion: false}}]
			}),
		//use the plugin to generate a html file using the template provided
		new HtmlWebpackPlugin({
			template: './public_src/index.html'
		})
	]
}
