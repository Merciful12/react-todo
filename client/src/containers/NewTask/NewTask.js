import React, { Component } from 'react';

import TaskAddButton from '../../components/TaskAddButton/TaskAddButton';
import TaskInput from '../../components/TaskInput/TaskInput';
import classes from './NewTask.module.scss'

class NewTask extends Component {
  state = {
    currentSign: 'important',
    text: ''
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
          clicked={this.changeSing}
        />
      </div>
    );
  }
}

export default NewTask;