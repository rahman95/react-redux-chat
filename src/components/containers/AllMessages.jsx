import React from 'react';

import './messages.css';

const AllMessages = ({ title, loading, messages }) => (
  <>
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="messages" data-testId="messages">
      {loading && <span>Loading...</span>}
      {messages}
    </div>
  </>
);

export default AllMessages;
