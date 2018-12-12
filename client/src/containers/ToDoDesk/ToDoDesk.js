import React, { Component } from 'react';

import VisibleTodoList from '../VisibleTodoList/VisibleTodoList'
import ToDoUtility from '../../components/ToDoUtility/ToDoUtility'

import classes from './ToDoDesk.module.scss'

class ToDoDesk extends Component {
  render() {
    return (
      <div className={classes.ToDoDesk}>
        <ToDoUtility />
        <VisibleTodoList />
      </div>
    );
  }
}

export default ToDoDesk;