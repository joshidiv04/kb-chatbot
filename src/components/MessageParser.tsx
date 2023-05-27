
import ActionProvider from './ActionProvider';
class MessageParser {
    actionProvider: ActionProvider;
    constructor(actionProvider: ActionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message: string) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }
      if (lowerCaseMessage.includes("javascript")) {
        this.actionProvider.handleJavascriptList();
      }
    }
  }
  
  export default MessageParser