import store from '../store';
import agent from 'src/agent';
import { nanoid } from 'nanoid';
import { PENDING_STATE } from 'src/constants/task';
import { 
  addTask, 
  deleteTask, 
  loadTaskList,
  selectedTask, 
  updateTask,
  updateTaskId 
} from 'src/actions';

class Task {
  static new() {
    const dispatch = store.dispatch;

    const task = {
      id: nanoid(),
      title: "Nueva tarea",
      description: "",
      state: PENDING_STATE
    };

    dispatch(addTask(task));
    dispatch(selectedTask(task.id));

    agent.Task.create({
      title: task.title,
      description: task.description

    }).then((response)=> {
      const taskId = response.data.task.id;
      dispatch(updateTaskId(task.id, taskId));
      dispatch(selectedTask(taskId));
    });
  }

  static update(taskId, values) {
    const dispatch = store.dispatch;   
    dispatch(updateTask(taskId, values));
    dispatch(selectedTask(taskId));
    agent.Task.update(taskId, values);
  }

  static delete(taskId) {
    const dispatch = store.dispatch;

    dispatch(deleteTask(taskId));
    agent.Task.delete(taskId);

    const state = store.getState();
    const taskList = state.taskList.taskList;
    const _selectedTask = state.taskList.selectedTask;
    
    if(_selectedTask.id === taskId) 
      dispatch(selectedTask(taskList[0] ? taskList[0].id : null));

  }

  static selected(taskId) {
    const dispatch = store.dispatch;
    dispatch(selectedTask(taskId));
  }
  
  static loadTaskList() {
    const dispatch = store.dispatch;
    agent.Task.all().then((response)=> {
      const taskList = response.data.taskList;
      dispatch(loadTaskList(taskList));
    });
  }
}

export default Task;