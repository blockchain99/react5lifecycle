import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
class Toggle extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 
          'Now True -> If want to change to False, Click' : 
          'Now False -> If want to change to True, Click'}
        </button>
      );
    }
  }

  export default Toggle;