import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMessageData, getMembersData } from '../data/actions';
import MessageContainer from './MessageContainer';

const App = () => {
  const { loading, messages } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessageData());
    dispatch(getMembersData());
  }, []);

  return (
    <main>
      <h1>React Redux Chat</h1>
      <MessageContainer loading={loading} messages={messages} />
    </main>
  );
};

export default App;
