import React from 'react';

const Message = ({ message }) => {
  const { id, message: messageText, timestamp, userId } = message;
  return (
    <div className="message">
      <div className="user">
        <img className="avatar" src="http://dummyimage.com/100x100.png/5fa2dd/ffffff"></img>
      </div>
      <div className="text">
        <span>{userId}</span>
        <p>{messageText}</p>
      </div>
      {/* <span>Id: {id}</span> */}
      {/* <span>Ts: {timestamp}</span> */}
    </div>
  );
};

export default Message;
