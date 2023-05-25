import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createChatBotMessage} from "react-chatbot-kit"
import ChatBot from "react-chatbot-kit";
import ActionProvider from './components/ActionProvider';
import MessageParser from './components/MessageParser';


let config = {
  botName: "Learning-Bot",
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: "learningOptions",
    }),

  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
      
    },  
    chatButton: {
      backgroundColor: "white",
    },

  },
}

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
