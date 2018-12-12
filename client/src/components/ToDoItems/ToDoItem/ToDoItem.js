import React from 'react'

import Significance from '../../../components/Significance/Significance'
import {ReactComponent as Trash} from './trash.svg'

import classes from './TodoItem.module.scss'

export default function toDoItem(props) {
  let TaskStyle = [classes.TodoItem, (props.completed ? classes.Completed : null)]
  return (
    <div className={TaskStyle.join(' ')}>
      <Significance color={props.completed ? 'completed' : props.significance} />
      <div onClick={props.onClickToggle} className={classes.text}>{props.text}</div>
      <Trash className={classes.Trash} onClick={props.onClickRemove}/>
    </div>
  )
}
