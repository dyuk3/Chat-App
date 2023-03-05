import React, { useState } from 'react';
import './message.css';
import { FiThumbsUp } from 'react-icons/fi';

const Message = ({ sender, text, time, likes, id }) => {
  const initial = sender.slice(0, 1);

  const className = () => {
    if (initial === 'A') {
      return 'int-a';
    }
    else if (initial === 'B') {
      return 'int-b';
    }
    else if (initial === 'C') {
      return 'int-c';
    }
    else if (initial === 'D') {
      return 'int-d';
    }
    else {
      return 'int-any';
    }

  };

  const [numOfLikes, setNumOfLikes] = useState(0);

  const likeMessage = () => {
    setNumOfLikes(likes => likes += 1);
  };

  return (
    <div className='chatApp__message'>
      <div className="chatApp__message-info">
        <div className={`chatApp__message-init ${className()}`} >
          <p>{initial}</p>
        </div>
        <h4>{sender}</h4>
        <p>{time}</p>
      </div>
      <div className="chatApp__message-text">
        <p>{text}</p>
        <span className='like'>
          <FiThumbsUp className='like-btn' size={16} onClick={likeMessage} />
          <span className='likes-count'>{numOfLikes}</span>
        </span>

      </div>
    </div>
  );
};

export default Message;