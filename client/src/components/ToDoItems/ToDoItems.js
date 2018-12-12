import React, { Component } from "react"

import ToDoItem from "./ToDoItem/ToDoItem"

import classes from "./ToDoItems.module.scss"

class ToDoItems extends Component {
  componentDidMount () {
    this.props.onFetchTasks()
  }

  render() {
    let tasks
    if (this.props.loading) {
      tasks = <div>LOADING</div>
    } else {
      tasks = (
        <>
        {this.props.tasks.map(task => (
          <ToDoItem
            key={task.id}
            onClickRemove={ () => this.props.onRemoveTask(task.id)}
            onClickToggle={() => this.props.onToggleComplete(task)}
            onClickChangeSign={() => task.completed ? null : this.props.onChangeSign(task)}
            {...task}
          />
        ))}
        </>
      )
    }
    return (
      <div className={classes.ToDoItems}>
        {tasks}
      </div>
    )
  }
}

export default ToDoItems
