import React, { Component } from 'react';
import logo from './ss.png';
import './App.css';
import Timer from './Timer';
import NameList from './NameList';
import FormatName from './FormatName';
import Comment from './Comment';

const comment  = {
  date: new Date(),
  text: ' I hope you enjoy learning React1',
  author: {
    name: 'React Gru',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="signintext">say hello !</h3>
          <Timer time="0" />
          <NameList items = {this.state.items} />
          <FormatName />
          <Comment date={comment.date} 
            text = { comment.text }
            author = { comment.author }
          />
          <form className="logininputs" onSubmit = { this.handleSubmit } >
            <label htmlFor="new-name">
              Please input name : 
            </label>
            <input className="inputname" 
              id = "new-name"
              onChange = { this.handleChange }
              value = { this.state.text }
            />
            <button className="btn btn-primary">
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </header>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.text.length) {
      return;
    }
    const newItem = { 
      text: this.state.text,
      id: Date.now()
    }
    this.setState( state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

export default App;
