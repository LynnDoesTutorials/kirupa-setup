import React from "react";
import ReactDOM from "react-dom";
import createReactClass from "create-react-class";

const HelloWorld = createReactClass({
  render: function () {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});

ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman" />
    <HelloWorld greetTarget="Iron Man" />
    <HelloWorld greetTarget="Wonder Woman" />
    <HelloWorld greetTarget="Mega Man" />
    <HelloWorld greetTarget="Cat Woman" />
    <HelloWorld greetTarget="Bono" />
    <HelloWorld greetTarget="You, Awesome One" />
  </div>,
  document.querySelector("#container")
);