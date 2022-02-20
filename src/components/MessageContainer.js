import React from 'react';
import Message from './Message';

const MessageContainer = ({ loading, messages }) => {
  return (
    <div className="message-container">
      <div className="title">
        <h3>All Messages</h3>
      </div>
      <div className="messages">
        {loading ? <span>Loading...</span> : messages.map((message, index) => <Message message={message} key={index} />)}
      </div>
    </div>
  );
};

export default MessageContainer;
