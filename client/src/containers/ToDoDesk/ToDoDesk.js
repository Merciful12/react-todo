import React, { Component } from 'react';

import ToDoItems from '../../components/ToDoItems/ToDoItems'
import ToDoUtility from '../../components/ToDoUtility/ToDoUtility'

import classes from './ToDoDesk.module.scss'

class ToDoDesk extends Component {
  render() {
    return (
      <div className={classes.ToDoDesk}>
        <ToDoUtility />
        <ToDoItems />
      </div>
    );
  }
}

export default ToDoDesk;