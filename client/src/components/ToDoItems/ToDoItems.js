import React, { Component } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'


import ToDoItem from './ToDoItem/ToDoItem'
import Spinner from '../Spinner/Spinner'

import classes from './ToDoItems.module.scss'

class ToDoItems extends Component {
  componentDidMount () {
    this.props.onFetchTasks()
  }

  onDragEnd = ({destination, source, draggableId}) => {
    // dropped outside the list

    if (!destination) {
      return
    }
    
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    
    let new_position = destination.index
    let taskId = draggableId
    this.props.onDnD(taskId, new_position)
  }

  render() {
    let tasks
    if (this.props.loading) {
      tasks = <Spinner />
    } else {
      tasks = (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="todos">
            {(provided) => (
              <div ref={provided.innerRef}
                {...provided.draggableProps}>
                {this.props.tasks.map(task => (
                  <ToDoItem
                    key={task.id}
                    onClickRemove={() => this.props.onRemoveTask(task.id)}
                    onClickToggle={() => this.props.onToggleComplete(task)}
                    onClickChangeSign={() => task.completed ? null : this.props.onChangeSign(task)}
                    {...task}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )
    }
    return (
      <div className={classes.ToDoItems}>
        {tasks}
      </div>
    )
  }
}

export default ToDoItems
