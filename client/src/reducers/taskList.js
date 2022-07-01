import list from 'src/utils/list';
import { 
  LOAD_TASK_LIST,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK
} from 'src/constants/actionTypes';
import * as taskState from 'src/constants/task';

const initialState = {
  taskList: [],
  selectedTask: {}
};

export default (state=initialState, action)=> {
  switch (action.type) {
    case LOAD_TASK_LIST:
      return {
        ...state,
        taskList: action.payload.taskList
      };

    case ADD_TASK:
      return {
        ...state,
        taskList: list(state.taskList).add(action.payload.task)
      };

    case DELETE_TASK:
      return {
        ...state,
        taskList: list(state.taskList).deleteById(action.payload.taskId) 
      };

    case UPDATE_TASK:
      return {
        taskList: list(state.taskList).updateById(
          action.payload.taskId,
          action.payload.values
        )
      };

    default:
      return state;
  }
}