import React, { useState } from 'react';
import './sendMsgForm.css';
import InputEmoji from 'react-input-emoji';
import { v4 as uuidv4 } from 'uuid';

const SendMsgForm = ({ messages, setMessages }) => {
  const [message, setMessage] = useState('');

  const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];

  const randomUser = (arr) => {
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };


  const handleSubmit = () => {

    const newMessage = {
      id: uuidv4(),
      sender: randomUser(user_list),
      message: message,
      time: new Date().toLocaleTimeString(),
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  // const handleChange = (e) => {
  //   setMessage(e.target.value);
  // };
  return (
    <div className='chatApp__sendMsgForm-wrapper content__padding'>
      <form className="chatApp__sendMsgForm" onSubmit={handleSubmit}>
        {/* <input type="text" placeholder='Type message' value={message} onChange={handleChange} /> */}
        <InputEmoji value={message} placeholder='Type a message' onEnter={handleSubmit} onChange={setMessage} />
      </form>
    </div>
  );
};

export default SendMsgForm;