# What is react?
React is a frontend framework that enables web developers to use a micro-frontend design pattern in their projects. All domains or reusable parts are called **components**.
# Why use react?
Say for example we are developing a website. Some of you who have studied web technologies in 3rd level may know how annoying it is to constantly write the same parts of the html like `<nav>`,`<footer>`, etc. We can use react or vanilla javascript to separate our components. This enables maintainable and reusable code.
# About this example
The goal of this example is show how to use react just on its own without webpack or babel which will be covered in later examples.
## Project structure

```Shell
.
├── public
│   ├── app.js # Main script that loads the react content
│   ├── components 
│   │   └── helloText.js # Hello class that is used by app to render a <h1> with a greeting
│   └── index.html # html file that we use to preview our mini react app
└── README.md
```

## Project goals
* Showcase how to create and import your own react components
* use react to render content to DOM

# General overview of how project works
In order to use react without any backend or bundler we have to load the whole react library and sub-libraries through some service. A CDN(Content Delivery Network) allows us to import node libraries like react just using some script tags. Now we have a way to use react without node, webpack or babel😁.

With our little development environment set up we can now design a basic Hello class that will simple render a `<h1>` with text saying hello {name input}. This is accomplished by writing two javascript files one called `helloText.js` in the components directory and the other called `app.js` which is the main script that handles the rendering.

One very important lesson that this teaches us is that the order of which the scripts are loaded is crucial. In the node javascript files when we use `import from x` what we are actually doing is a copy and paste of the content that is in the file that we need. This creates a dependency chain which is simple in node and with bundlers but when we are in charge or the order it can become very challenging fast. This is the main reason bundlers were developed as web developers need a solution to this problem. Additionally it simplifies the amount of script tags we need to 1😎.

Another important detail is the version of javascript we are using. The `class` keyword in javascript is ES6 and surprisingly ES5 is still used to this day. This introduces a version issue that babel as a transpiler can solve for us in a later stage.

# How to test
Simply open index.html found in public directory.

# References
[CDN links for react](https://legacy.reactjs.org/docs/cdn-links.html)
