import React from 'react';

import ChatBot from "react-chatbot-kit";
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';
import config from './components/config';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatBot actionProvider={ActionProvider} config={config} messageParser={MessageParser}></ChatBot>
      </header>
    </div>
  )
}

export default App;
