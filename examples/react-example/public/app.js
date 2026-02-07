/*
 * Purpose:
 * This defines the main script that will render our webpage using our components found in ./components
 * Programmer: Matas Noreika 26/02/06 18:28:35
*/

//set the default export of this file as app which is a function that renders the content
const app = function(){
  //create our root
  let root = createRoot(document.getElementById('root'));
  //render our greeting to the root
  root.render(Hello.render());
}

//preform the rendering when the app loads
window.onload = function(){
  //create a root reference to render our virtual DOM onto our real DOM
  const root = ReactDOM.createRoot(document.getElementById('root'));
  //Render our Hello class and pass our name as a property (change the name to your liking)
  root.render(React.createElement(Hello,{name: 'matas'}, null));
}
