import _axios from 'axios';
import objectToFormData from 'lib/object-to-form-data';

const axios = _axios.create({
  withCredentials: true
}); 

const API_ROOT = "http://192.168.20.24:4000";

const requests = {
  get: (url, config)=> 
    axios.get(`${API_ROOT}${url}`, config),
  post: (url, data, config)=>
    axios.post(`${API_ROOT}${url}`, data, config),
  postFormData: (url, data, config)=>
    axios.post(`${API_ROOT}${url}`, objectToFormData(data), {
      ...config, headers: {"Content-Type": "multipart/form-data"}}),
  put: (url, data, config)=>
    axios.put(`${API_ROOT}${url}`, data, config),
  delete: (url, config)=>
    axios.delete(`${API_ROOT}${url}`, config)
};

const User = {
  signUp: ({avatar, username, email, password})=>
    requests.post("/user", {avatar, username, email, password}),
  signIn: ({email, password})=>
    requests.get("/user", {email, password}),
  signOut: (config)=> 
    requests.get("/user/signOut", config),
  current: (config)=>
    requests.get("/user/current", config),
  avatar: (avatar)=>
    requests.postFormData("/user/upload", {avatar})
};

const Task = {
  get: (taskId)=>
    requests.get(`/task?id=${taskId}`),
  all: ()=>
    requests.get("/task/all"),
  create: ({title, description, state})=>
    requests.post("/task/create", {title, description, state}),
  update: (taskId, newValues)=>
    requests.put(`/task?id=${taskId}`, newValues),
  delete: (taskId)=>
    requests.delete(`/task?id=${taskId}`)
};

export default {
  User,
  Task
};