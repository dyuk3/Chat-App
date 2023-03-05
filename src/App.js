import { useState } from 'react';
import './App.css';
import { Header, MessageList, SendMsgForm } from './components';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [messages, setMessages] = useState([
    {
      id: uuidv4(),
      sender: 'PubNub Bot',
      message: 'Welcome to the Chat. Send a message now to start interacting with other users.',
      time: new Date().toLocaleTimeString(),
    },
  ]);

  return (
    <div className='App'>
      <Header />
      <MessageList data={messages} setMessages={setMessages} />
      <SendMsgForm messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;
