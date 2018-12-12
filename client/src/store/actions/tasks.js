import * as actionTypes from './actionsTypes'

import todoService from '../../services/todoService'

import {changeSing} from '../../utils/changeSign'

export const addTaskStart = () => ({
  type: actionTypes.ADD_TASK_START
})

export const addTaskSuccess = () => ({
  type: actionTypes.ADD_TASK_SUCESS
})

export const addTaskFailed = (error) => ({
  type: actionTypes.ADD_TASK_FAILED,
  payload: {
    error
  }
})

export const addTask = (task) => {
  return dispatch => {
    dispatch(addTaskStart())
    todoService.create(task)
      .then(() => {
        dispatch(addTaskSuccess())
        dispatch(fetchTasks())
      })
      .catch(error => {
        dispatch(addTaskFailed(error))      
      })
  }
}

export const removeTaskStart = () => ({
  type: actionTypes.REMOVE_TASK_START
})

export const removeTaskFailed = (error) => ({
  type: actionTypes.REMOVE_TASK_FAILED,
  payload: {
    error
  }
})

export const removeTaskSuccess = () => ({
  type: actionTypes.REMOVE_TASK_SUCESS
})

export const removeTask = (taskId) => {
  return dispatch => {
    dispatch(removeTaskStart())
    todoService.remove(taskId)
      .then(() => {
        dispatch(removeTaskSuccess())
        dispatch(fetchTasks())
      })
      .catch(error => {
        dispatch(removeTaskFailed(error))      
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

export const toggleCompleteStart = () => ({
  type: actionTypes.REMOVE_TASK_START
})

export const toggleCompleteFailed = (error) => ({
  type: actionTypes.REMOVE_TASK_FAILED,
  payload: {
    error
  }
})

export const toggleCompleteSuccess = () => ({
  type: actionTypes.REMOVE_TASK_SUCESS
})

export const toggleComplete = (task) => {
  return dispatch => {
    dispatch(removeTaskStart())
    const updatedTask = {
      ...task,
      completed: !task.completed 
    }
    todoService.change(updatedTask)
      .then(() => {
        dispatch(toggleCompleteSuccess())
        dispatch(fetchTasks())
      })
      .catch(error => {
        dispatch(toggleCompleteFailed(error))      
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
        dispatch(toggleCompleteFailed(error))      
      })
  }
}