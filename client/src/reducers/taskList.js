import list from 'src/utils/list';
import { 
  LOAD_TASK_LIST,
  ADD_TASK,
  DELETE_TASK,
  UPDATE_TASK,
  SELECTED_TASK
} from 'src/actions';

const initialState = {
  taskList: [],
  selectedTask: {
    title: "",
    state: "",
    description: ""
  }
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
        taskList: list(state.taskList).add({
          ...action.payload.task, 
          deleted: false
        })
      };

    case DELETE_TASK:
      return {
        ...state,
        taskList: list(state.taskList).updateById(
          action.payload.taskId, 
          {deleted: true}
        ) 
      };

    case UPDATE_TASK:
      return {
        ...state,
        taskList: list(state.taskList).updateById(
          action.payload.taskId,
          action.payload.values
        )
      };

    case SELECTED_TASK:
      return {
        ...state,
        selectedTask: list(state.taskList).findOneById(action.payload.taskId) || {}
      };

    default:
      return state;
  }
}