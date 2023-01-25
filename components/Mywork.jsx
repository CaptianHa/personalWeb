import React from 'react'
import website from '../images/website.jpg'

export default function MyWork(props){

    
    return (
      <div className="third--page">
       
        <div className="work--container">
          <h1>
             <u>{props.item.project}</u>
            <br></br> <br></br>
            <img className="work--photo" src={website} />
            <br></br>
            <p1 className="work--description">
              {props.item.description}
              <br></br>
              Tools: {props.item.tools.at(0)}, {props.item.tools.at(1)},{" "}
              {props.item.tools.at(2)}
              <br></br>
              Languages: {props.item.language.at(0)},{" "}
              {props.item.language.at(1)}
              <br></br>
              <a className="link--project"href = {props.item.link} target="_blank" rel="noopener noreferrer">code</a>
            </p1>
          </h1>
        </div>
      </div>
    );
}