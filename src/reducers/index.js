import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messageReducer from './messageReducer';
import memberReducer from './memberReducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    messages: messageReducer,
    members: memberReducer,
  });
