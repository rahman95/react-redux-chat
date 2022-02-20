import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messageReducer from './messageReducer';
import memberReducer from './memberReducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  messages: messageReducer,
  members: memberReducer,
});

export default createRootReducer;
