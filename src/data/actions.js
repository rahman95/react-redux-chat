import { getMessages, getMembers } from './index';

const getMessageData = () => (dispatch) => {
  dispatch({ type: 'FETCH_MESSAGES_START' });

  getMessages()
    .then((data) => dispatch({ type: 'FETCH_MESSAGES_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'FETCH_MESSAGES_ERROR', payload: err }));
};

const getMembersData = () => (dispatch) => {
  dispatch({ type: 'FETCH_MEMBERS_START' });

  getMembers()
    .then((data) => dispatch({ type: 'FETCH_MEMBERS_SUCCESS', payload: data }))
    .catch((err) => dispatch({ type: 'FETCH_MEMBERS_ERROR', payload: err }));
};

export { getMessageData, getMembersData };
