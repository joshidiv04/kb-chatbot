import React from "react";
import "./TechStackOptions.scss";

const TechStackOptions = (props:any) =>{
    const options=[
        {text:"Javascipt", handler:props.actionProvider.handleJavascriptList, id:1},
        {text:"Node JS", handler:()=>{}, id:2},
        {text:"React JS", handler:()=>{}, id:3},
        {text:"MERN", handler:()=>{}, id:4},
    ];

    const markUpOptions = options.map((option)=>(
        <button className="techstack-option-button" 
                key={option.id} 
                onClick={option.handler}>
            {option.text}
        </button>
    ));

    return <div className="techstack-options-container">{markUpOptions}</div>;
}

export default TechStackOptions;