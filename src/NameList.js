import React, { Component } from 'react'

class NameList extends Component {
  render() {
    return (
      <div>
        {this.props.items.map(item => (
                    <p key={item.id}>Hello! {item.text}</p>
                 ))}
      </div>
    );
  }
}

export default NameList;

