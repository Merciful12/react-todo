import React, { Component } from 'react';

import TaskAddButton from '../../components/TaskAddButton/TaskAddButton';
import TaskInput from '../../components/TaskInput/TaskInput';
import classes from './NewTask.css'

class NewTask extends Component {
  state = {
    currentSign: 'red',
    text: ''
  }

  changeSing = () => {
    let newColor;
    switch (this.state.currentSign) {
      case 'red':
        newColor = 'green';
        break;
      case 'green':
        newColor = 'blue';
        break;
      case 'blue':
        newColor = 'red';
        break;
      default:
        newColor = 'red';
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