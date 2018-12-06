import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../../store/actions'

import TaskAddButton from '../../components/TaskAddButton/TaskAddButton'
import TaskInput from '../../components/TaskInput/TaskInput'

import classes from './NewTask.module.scss'

class NewTask extends Component {
  state = {
    currentSign: 'important',
    text: ''
  }

  addTask = () => {
    const significance = this.state.currentSign
    const text = this.state.text
    if (!text) return

    const task = {
      significance,
      text
    }
    this.props.onAddTask(task)
    this.setState({
      currentSign: 'important',
      text: ''
    })
  }

  changeSing = () => {
    let newColor;
    switch (this.state.currentSign) {
      case 'important':
        newColor = 'regular';
        break;
      case 'regular':
        newColor = 'unimportant';
        break;
      case 'unimportant':
        newColor = 'important';
        break;
      default:
        newColor = 'important';
    }

    this.setState({currentSign: newColor});
  }

  changeInput = (e) => {
    let newText = e.target.value
    this.setState({text: newText})
  }
  
  render() {
    return (
      <div className={classes.NewTask}>
        <TaskInput
          place="learn reactivejs..."
          changed={this.changeInput}
        />
        <TaskAddButton
          color={this.state.currentSign}
          clickOnSing={this.changeSing}
          clickAdd={this.addTask}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTask: (task) => dispatch(actions.addTask(task))
})

export default connect(null, mapDispatchToProps)(NewTask)