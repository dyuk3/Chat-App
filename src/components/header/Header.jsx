import React from 'react';
import './header.css';
import { BsPeople } from 'react-icons/bs';

const Header = () => {
  return (
    <div className='chatApp__header content__padding'>
      <div className="chatApp__header-content">
        <h1>Introductions</h1>
        <p>This Channel is For Company Wide Chatter</p>
      </div>
      <div className="chatApp__header-people">
        <div className="chatApp__header-people__count">
          <span>3</span>
          <span>100</span>
        </div>
        <BsPeople size={20} />

      </div>
    </div>
  );
};

export default Header;