import axios from 'axios'

const api = () => {
  return axios.create({
    baseURL: `https://qdummy-todo.herokuapp.com/api/`,
    headers: {
      'Authorization': '35:_U58G_nEs8RRVuHyTzwT'
    }
  })
}

export default api
