

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

    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Fantastic, I've got the following resources for you on Javascript:",
        {
          widget: "javascriptLinks",
        }
      );
      this.updateChatbotState(message);
    };
    
    updateChatbotState(message: any) {
   
    this.setState((prevState: { messages: any; }) => ({
          ...prevState, messages: [...prevState.messages, message]
      }))
    }
  }
  
  export default ActionProvider