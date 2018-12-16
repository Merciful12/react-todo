import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import {IMPORTANT, changeSing} from '../../utils/changeSign'

import TaskAddButton from '../../components/TaskAddButton/TaskAddButton'
import TaskInput from '../../components/TaskInput/TaskInput'

import classes from './NewTask.module.scss'


class NewTask extends Component {
  state = {
    currentSign: IMPORTANT,
    text: ''
  }

  addTask = (e) => {
    e.preventDefault()

    const significance = this.state.currentSign
    const text = this.state.text
    if (!text) return

    const task = {
      significance,
      text
    }
    this.props.onAddTask(task)
    this.setState({
      currentSign: IMPORTANT,
      text: ''
    })
  }

  changeSing = () => {
    let newColor = changeSing(this.state.currentSign)

    this.setState({currentSign: newColor});
  }

  changeInput = (e) => {
    let newText = e.target.value
    this.setState({text: newText})
  }
  
  render() {
    return (
      <form onSubmit={this.addTask} className={classes.NewTask}>
        <TaskInput
          place="learn reactivejs..."
          changed={this.changeInput}
          value={this.state.text}
        />
        <TaskAddButton
          color={this.state.currentSign}
          clickOnSing={this.changeSing}
          clickAdd={this.addTask}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTask: (task) => dispatch(actions.addTask(task))
})

export default connect(null, mapDispatchToProps)(NewTask)