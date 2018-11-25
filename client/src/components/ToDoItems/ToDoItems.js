import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import ToDoItem from "./ToDoItem/ToDoItem";

import classes from "./ToDoItems.module.scss";

class ToDoItems extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
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
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  loading: state.tasks.loading
});

const mapDispatchToProps = dispatch => ({
  onFetchTasks: () => dispatch(actions.fetchTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoItems);
