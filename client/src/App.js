import React, { Component } from 'react';

import { Provider } from 'react-redux'

import store from './store/store'

import NewTask from './containers/NewTask/NewTask';
import ToDoDesk from './containers/ToDoDesk/ToDoDesk'

import classes from './App.module.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={classes.App}>
          <NewTask />
          <ToDoDesk />
        </div>
      </Provider>
    );
  }
}

export default App;
