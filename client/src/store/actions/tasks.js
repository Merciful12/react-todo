import * as actionTypes from './actionsTypes'

import todoService from '../../services/todoService'

import {changeSing} from '../../utils/changeSign'

export const addTask = (task) => {
  return dispatch => {
    todoService.create(task)
      .then(() => {
        dispatch(fetchTasks())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const removeTask = (taskId) => {
  return dispatch => {
    todoService.remove(taskId)
      .then(() => {
        dispatch(fetchTasks())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const fetchTasksStart = () => ({
  type: actionTypes.FETCH_TASKS_START
})

export const fetchTasksFailed = (error) => ({
  type: actionTypes.FETCH_TASKS_FAILED,
  payload: {
    error
  }
})

export const fetchTasksSuccess = (tasks) => ({
  type: actionTypes.FETCH_TASKS_SUCESS,
  payload: {
    tasks
  }
})

export const fetchTasks = () => {
  return dispatch => {
    dispatch(fetchTasksStart())
    todoService.list()
      .then(res => {
        const tasks = res.data
        dispatch(fetchTasksSuccess(tasks))      
      })
      .catch(error => {
        dispatch(fetchTasksFailed(error))      
      })
  }
}

export const toggleComplete = (task) => {
  return dispatch => {
    const updatedTask = {
      ...task,
      completed: !task.completed 
    }
    todoService.change(updatedTask)
      .then(() => {
        dispatch(fetchTasks())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const changeSignTask = (task) => {
  return dispatch => {
    const significance = changeSing(task.significance)
    const updatedTask = {
      ...task,
      significance
    }
    todoService.change(updatedTask)
      .then(() => {
        dispatch(fetchTasks())
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const changePositionTaskStart = () => ({
  type: actionTypes.CHANGE_POSITION_START
})

export const changePositionTask = (taskId, new_position) => {
  return dispatch => {
    dispatch(changePositionTaskStart())
    const updatedTask = {
      id: taskId,
      new_position
    }
    todoService.change(updatedTask)
      .then(() => {
        dispatch(fetchTasks())
      })
      .catch(error => {
        console.log(error)
      })
  }
}
