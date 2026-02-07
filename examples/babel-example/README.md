# What is babel?
Babel is a transpiler(compiles code from one language to another) which allows web developers to use modern day javascript syntax without the worries of compatibility with older browsers. Babel itself is built on top of other libraries which I will not mention here but they are well documented on babels official website.
# Why babel?
There actually is no reason we are forced into using babel. There are many alternatives like SWC, ESBuild, etc. Babel is just known and is compatible with webpack which we will go into detail later in these examples.
# About this example
The goal of this example is to enable the reader to have a better idea in the process babel preforms on the source code. In this tutorial we will be using material from the last react-example. This project will also introduce the jsx format and how we can use it with react.

## Project Structure 

```Shell
.
├── output # transpiled javascript content from public
│   ├── app.js
│   └── helloText.js
├── output2 # transpiled javascript XML content from public2
│   ├── app.js
│   └── helloText.js
├── public # javascript version of react-example
│   ├── app.js
│   ├── components
│   └── index.html
├── public2 # javascript XML version of react-example
│   ├── app.jsx
│   ├── components
│   └── index.html
└── README.md
```

## Project goals
* Describe the process babel performs on source code
* Introduce jsx to enable easier development with react
* Enable developers to generate their own babel configuration files

# General Overview
This project can be broken down into two main parts:
1. babel with javascript
2. babel with javascript XML(jsx)

In order continue ensure all npm packages from the main directory are installed with the following command:
```Shell
npm ci # preforms clean install for node packages (better than npm install)
```

Once the all packages are available take a look into the .babelrc.json file. This file describes what presets(collection of plugins) babel will use to transform our source code.
Babel has two forms of configuration files local and global. In this example we are using a local configuration to prevent future conflicts with the plugin build configurations. Global configuration files are names babel.config.json and are place in the top most level where package.json exists.

Now we have a babel configuration set and our development environment. If you open the index.html found in public directory you will see it will load the same example as in react-example. There is only 1 minor difference, all files have been transpiled to ES5. Lets compare the app.js to the transpiled version.

output/app.js:

```JavaScript
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
  root.render(React.createElement(Hello, {
    name: 'matas'
  }, null));
};
```

public/app.js:

```JavaScript
/*
 * Purpose:
 * This defines the main script that will render our webpage using our components found in ./components
 * Programmer: Matas Noreika 26/02/06 18:28:35
*/

//preform the rendering when the app loads
window.onload = () => {
  //create a root reference to render our virtual DOM onto our real DOM
  const root = ReactDOM.createRoot(document.getElementById('root'));
  //Render our Hello class and pass our name as a property (change the name to your liking)
  root.render(React.createElement(Hello,{name: 'matas'}, null));
}
```

The first main observation might be the function syntax as the `() => {}` function definition is not supported in ES5. Now I would say have a look at the helloText example but to be honest I would rather not want to waste my time explaining the huge changes performed on them. I think it is still a good idea to have a look to have an appreciation for the work this transpiler performs for you.
# How to test
In order to use babel on the cli we will use the npx command to execute node package code.
The following command was used in the root of this example directory:

```Shell
npx babel public/app.js -d output
```

The `-d` argument supplied tells babel the output directory preferred. Additionally if we did not have a babel configuration file we would have to supply `--presets=@babel/env`.

In the project you will find two copies of react-example. public contains javascript content while public2 contains jsx content that does the same operation.

# References
[babel docs](https://babeljs.io)

[JSX wikipedia entry](https://en.wikipedia.org/wiki/JavaScript_XML)
