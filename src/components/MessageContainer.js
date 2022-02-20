import React, { useState } from 'react';
import dayjs from 'dayjs';
import Message from './Message';
import AllMessages from './containers/AllMessages';
import UserMessages from './containers/UserMessages';

import './message-container.css';

const MessageContainer = ({ loading, messages }) => {
  const views = {
    ALL_MESSAGES: 'ALL_MESSAGES',
    USER_MESSAGES: 'USER_MESSAGES',
  };

  const [activeView, setActiveView] = useState(views.ALL_MESSAGES);
  const [activeUser, setActiveUser] = useState(null);

  const handleUserClick = (user) => {
    setActiveUser(user);
    setActiveView(views.USER_MESSAGES);
  };

  const handleBackClick = () => {
    setActiveUser(null);
    setActiveView(views.ALL_MESSAGES);
  };

  const sortMessages = (messages) =>
    messages
      .sort((a, b) => dayjs(b.timestamp) - dayjs(a.timestamp))
      .map((message, index) => <Message message={message} key={index} handleUserClick={handleUserClick} />);

  const userMessages = activeUser ? messages.filter((message) => message.userId === activeUser.id) : [];

  return (
    <div className="message-container">
      {activeView === views.USER_MESSAGES ? (
        <UserMessages
          title="User Messages"
          loading={loading}
          messages={sortMessages(userMessages)}
          handleBackClick={handleBackClick}
        />
      ) : (
        <AllMessages title="All Messages" loading={loading} messages={sortMessages(messages)} />
      )}
    </div>
  );
};

export default MessageContainer;
