import _axios from 'axios';

const axios = _axios.create({
  withCredentials: true
}); 

const API_ROOT = "http://192.168.100.6:4000";

const requests = {
  get: (url, config)=> 
    axios.get(`${API_ROOT}${url}`, config),
  post: (url, data, config)=>
    axios.post(`${API_ROOT}${url}`, data, config),
  put: (url, data, config)=>
    axios.post(`${API_ROOT}${url}`, data, config),
  delete: (url, config)=>
    axios.delete(`${API_ROOT}${url}`, config)
};

const User = {
  signUp: ({image, username, email, password})=>
    requests.post("/user/signUp", {image, username, email, password}),
  signIn: ({email, password})=>
    requests.post("/user/signIn", {email, password}),
  signOut: ()=> 
    requests.post("/user/signOut"),
  current: ()=>
    requests.get("/user/current")
};

const Task = {
  get: (taskId)=>
    requests.get(`/task?taskId=${taskId}`),
  getAll: ()=>
    requests.get("/task/all"),
  update: (taskId, newValues)=>
    requests.put(`/task/update?taskId=${taskId}`, newValues),
  delete: (taskId)=>
    requests.delete(`/task/delete?taskId${taskId}`)
};

console.log("ok");

export default {
  User,
  Task
};