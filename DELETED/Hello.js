import React, { Component } from "react"; // Component destruturing from React
import "./Hello.css";

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello Wolrd</h1>
        <p>Welcome to React</p>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

// we're basically writing functions

// const Hello = props => {
//   return (
//     <div className="f1 tc">
//       <h1>Hello Wolrd</h1>
//       <p>Welcome to React</p>
//       <p>{props.greeting}</p>
//     </div>
//   );
// }

export default Hello;
