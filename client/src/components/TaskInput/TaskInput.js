import React from 'react'

import classes from './TaskInput.module.scss'

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
