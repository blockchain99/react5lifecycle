import React, { Component } from 'react';
import ReactDOM from 'react-dom';
/*After I changed fm this.props.date to
render() {return {this.state.date}} -> It works! 
But Both lecture code in codepen and mine- no ime
changes 
***  free up resources taken by the components 
***when they are destroyed.-> lifecycle method:
-> We want to set up a timer whenever the Clock is 
rendered to the DOM for the first time. 
This is called “mounting” in React.

We also want to clear that timer whenever 
the DOM produced by the Clock is removed. 
This is called “unmounting” in React.*/
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock;