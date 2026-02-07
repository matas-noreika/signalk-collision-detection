/*
 * Purpose:
 * This is a component that will return a React component with text set to say hello {name}
 * Programmer: Matas Noreika 26/02/06 18:37:58
*/

//define our Hello component class to be an extension of the React component class
class Hello extends React.Component {
  //Render function that returns the content that has to be rendered
  render(){
    //Create a <h1> element that has a classname=Hello and text set to Hello {name}
    return (
      <h1 className="Hello"> Hello {this.props.name}</h1>
    );
  }
}
