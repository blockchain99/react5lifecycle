/* not working, So just all codes in index.js*/

import React, { Component } from 'react';
import logo from './ss.png';
import './Tick.css';
// import Timer from './Timer';
// import NameList from './NameList';
// import FormatName from './FormatName';
// import Comment from './Comment';

function tickfunc() {
    return (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
    )
}
function tick() {
    return tickfunc();
}

export default tick;


