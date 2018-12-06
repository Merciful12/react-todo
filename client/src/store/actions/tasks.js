import * as actionTypes from './actionsTypes'

import todoService from '../../services/todoService'

export const addTaskStart = () => ({
  type: actionTypes.ADD_TASK_START
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

export const removeTask = (taskId) => {
  return dispatch => {
    dispatch(removeTaskStart())
    todoService.remove(taskId)
      .then(() => {
        dispatch(fetchTasks())
      })
      .catch(error => {
        dispatch(addTaskFailed(error))      
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