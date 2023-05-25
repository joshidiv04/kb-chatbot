

class ActionProvider {
    createChatBotMessage: any;
    setState: any;
    constructor(createChatBotMessage: any, setStateFunc: any) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    greet() {
      const greetingMessage = this.createChatBotMessage("Hi, friend.")
      this.updateChatbotState(greetingMessage)
    }
    
    updateChatbotState(message: any) {
   
    // NOTE: This function is set in the constructor, and is passed in
    // from the top level Chatbot component. The setState function here     
    // actually manipulates the top level state of the Chatbot, so it's     
    // important that we make sure that we preserve the previous state. 
     this.setState((prevState: { messages: any; }) => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider