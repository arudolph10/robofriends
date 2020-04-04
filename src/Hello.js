import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  render(){
    return(
      <div className = 'f1 tc'>
        <h1>Hello World</h1>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

//Same as the code below

//const Hello = (props) => {
//  return(
//    <div className = 'f1 tc'>
//      <h1>Hello World</h1>
//     <p>{props.greeting}</p>
//    </div>
//  );
//}


export default Hello;

//in index.js
//import Hello from './Hello';
//ReactDOM.render
//  (<Hello greeting={'Welcome React Ninja'}/>, document.getElementById('root'));