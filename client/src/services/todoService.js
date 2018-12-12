import api from './api'

const todoService = {
  list () {
    return api().get('tasks')
  },
  get (taskId) {
    return api().get(`tasks/${taskId}`)
  },
  create (task) {
    return api().post('tasks', task)
  },
  change (task) {
    return api().put(`tasks/${task.id}`, task)
  },
  remove (taskId) {
    return api().delete(`tasks/${taskId}`)
  }
}
export default todoService
