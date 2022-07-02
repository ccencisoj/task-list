// Actions types
export const LOAD_TASK_LIST = "LOAD_TASK_LIST";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const SELECTED_TASK = "SELECTED_TASK";

// Actions creators
export const loadTaskList = (taskList)=> ({
  type: LOAD_TASK_LIST,
  payload: {taskList}
}); 

export const addTask = (task)=> ({ 
  type: ADD_TASK,
  payload: {task}
});

export const updateTask = (taskId, values)=> ({
  type: UPDATE_TASK,
  payload: {taskId, values}
});

export const updateTaskId = (taskId, newId)=> ({
  type: UPDATE_TASK,
  payload: {taskId, values: {id: newId}}
});

export const deleteTask = (taskId)=> ({
  type: DELETE_TASK,
  payload: {taskId}
});

export const selectedTask = (taskId)=> ({
  type: SELECTED_TASK,
  payload: {taskId}
});