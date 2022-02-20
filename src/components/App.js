import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getMessageData, getMembersData } from '../data/actions';
import MessageContainer from './MessageContainer';

const App = () => {
  const { loading: messageLoading, messages } = useSelector((state) => state.messages);
  const { loading: memberloading, members } = useSelector((state) => state.members);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessageData());
    dispatch(getMembersData());
  }, []);

  console.log({ messageLoading, messages, memberloading, members });

  return (
    <main>
      <h1>React Redux Chat</h1>
      <MessageContainer loading={messageLoading} messages={messages} />
    </main>
  );
};

export default App;
