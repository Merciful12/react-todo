import React, { Component } from 'react';

import NewTask from './containers/NewTask/NewTask';
import ToDoDesk from './containers/ToDoDesk/ToDoDesk'

import classes from './App.css'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <NewTask />
        <ToDoDesk />
      </div>
    );
  }
}

export default App;
