import { combineReducers } from "redux";
import commonReducer from 'src/reducers/common';
import taskListReducer from 'src/reducers/taskList';

export default combineReducers({
  common: commonReducer,
  taskList: taskListReducer
});