import React from 'react'
import {Draggable} from 'react-beautiful-dnd'

import Significance from '../../../components/Significance/Significance'
import {ReactComponent as Trash} from './trash.svg'

import classes from './TodoItem.module.scss'

export default function toDoItem(props) {
  let TaskStyle = [classes.TodoItem, (props.completed ? classes.Completed : null)]
  return (
    <Draggable draggableId={props.id} index={props.position}>
      {provided => (
        <div className={TaskStyle.join(' ')}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Significance onClicked={props.onClickChangeSign} color={props.completed ? 'completed' : props.significance} />
          <div onClick={props.onClickToggle} className={classes.text}>{props.text}</div>
          <Trash className={classes.Trash} onClick={props.onClickRemove} />
        </div>
      )}

    </Draggable>
  )
}
