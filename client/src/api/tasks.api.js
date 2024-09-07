//Se creara un scrip que enviara una petición al backend
import axios from 'axios'

const taskApi = axios.create({
   baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
})

export const getAllTasks = () => {
   return taskApi.get('/')
}

export const createTask = (task) =>{
   return taskApi.post('/',task)
}

export const updateTask = (id,task) =>{
   return taskApi.put(`/${id}/`,task)
}

export const getTask = (id) =>{
   return taskApi.get(`/${id}/`)
}

export const deleteTask = (id) =>{
   return taskApi.delete(`/${id}/`)
}
