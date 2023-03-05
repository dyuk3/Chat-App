import React from 'react';
import { Message } from '../../components';
import './messageList.css';

const MessageList = ({ data, setMessages }) => {
  return (
    <div className='chatApp__messageList content__margin'>
      {data.map((message) => (
        <Message key={message.id} id={message.id} time={message.time} setMessages={setMessages} sender={message.sender} text={message.message} />
      ))}
    </div >
  );
};

export default MessageList;