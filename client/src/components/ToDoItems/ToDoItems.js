import React, { Component } from "react"

import { connect } from "react-redux";
import * as actions from "../../store/actions"

import ToDoItem from "./ToDoItem/ToDoItem"

import classes from "./ToDoItems.module.scss"

class ToDoItems extends Component {
  componentDidMount () {
    this.props.onFetchTasks()
  }

  deleteTaskHandler = (taskId) => {
    this.props.onRemoveTask(taskId)
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
            onClickRemove={ () => this.deleteTaskHandler(task.id)}
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

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  loading: state.tasks.loading
})

const mapDispatchToProps = dispatch => ({
  onFetchTasks: () => dispatch(actions.fetchTasks()),
  onRemoveTask: (taskId) => dispatch(actions.removeTask(taskId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoItems)
