import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Toggle from './Toggle';
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);

// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world with clock()!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
  
//   function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);

/****** func -> class  ******/
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Clock />;
  }
  return <Toggle />;
}

  ReactDOM.render(
    // <Clock />,
    // <Toggle />,
    <Greeting isLoggedIn = {true} />,
    document.getElementById('root')
  );