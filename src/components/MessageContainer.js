import React from 'react';
import dayjs from 'dayjs';
import Message from './Message';

const MessageContainer = ({ loading, messages }) => {
  const sortedMessages = messages
    .sort((a, b) => dayjs(b.timestamp) - dayjs(a.timestamp))
    .map((message, index) => <Message message={message} key={index} />);

  return (
    <div className="message-container">
      <div className="title">
        <h3>All Messages</h3>
      </div>
      <div className="messages">{loading ? <span>Loading...</span> : sortedMessages}</div>
    </div>
  );
};

export default MessageContainer;
