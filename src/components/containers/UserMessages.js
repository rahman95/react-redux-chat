import React from 'react';

import './messages.css';

const UserMessages = ({ title, loading, messages, handleBackClick }) => (
  <>
    <div className="title">
      <h3>{title}</h3>
      <button className="back-button" onClick={handleBackClick}>←</button>
    </div>
    <div className="messages">
      {loading && <span>Loading...</span>}
      {messages}
    </div>
  </>
);

export default UserMessages;
