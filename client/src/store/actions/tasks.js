import * as actionTypes from './actionsTypes'

import todoService from '../../services/todoService'

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      task
    }
  }
}

export const removeTask = (taskId) => {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: {
      taskId
    }
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