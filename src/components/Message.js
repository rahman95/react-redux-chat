import React from 'react';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';

const DEFAULT_AVATAR = 'http://dummyimage.com/100x100.png/5fa2dd/ffffff';

const Message = ({ message }) => {
  const { members } = useSelector((state) => state.members);
  const { message: messageText, timestamp, userId } = message;
  const parseTs = dayjs(timestamp).format('DD MMM YYYY HH:mm');

  const user = members.find((member) => member.id === userId);
  const name = `${user?.firstName} ${user?.lastName}` || ''
  const email = user?.email || ''
  const avatar = user?.avatar || DEFAULT_AVATAR;

  return (
    <div className="message" title={email}>
      <div className="user">
        <img className="avatar" src={avatar}></img>
      </div>
      <div className="text">
        <span>{name}</span>
        <p >{messageText}</p>
        <span className="ts">{parseTs}</span>
      </div>
    </div>
  );
};

export default Message;
