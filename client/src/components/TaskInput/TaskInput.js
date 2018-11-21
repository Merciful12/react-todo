import React from 'react'

import classes from './TaskInput.css'

const taskInput = (props) => {
  return (
    <input
      className={classes.TaskInput}
      placeholder={props.place}
      onChange={props.changed}
    />
  )
}

export default taskInput
