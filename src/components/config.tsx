
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import TechStackOptions from "./TechStackOptions";
import LinkList from "./LinkList";

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
    widgets:[
      {
        widgetName: "techStackOptions",
        widgetFunc: (props: any) => <TechStackOptions {...props}/>,
        mapStateToProps: ["techStack"],
        props: {
        }
      },
      {
        widgetName: "javascriptLinks",
        widgetFunc: (props: any) => <LinkList {...props} />,
        mapStateToProps: ["techStack"],
        props: {
          options: [
            {
              text: "Introduction to JS",
              url:
                "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
              id: 1,
            },
            {
              text: "Mozilla JS Guide",
              url:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
              id: 2,
            },
            {
              text: "Frontend Masters",
              url: "https://frontendmasters.com",
              id: 3,
            },
          ],
        }
      },
    ]
  }

export default config;