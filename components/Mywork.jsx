import React from 'react'
import picture0 from "../public/surf-forecast.jpg"
import picture1 from "../public/website.jpg"
import picture2 from "../public/hackathon.jpg"


function picture(props){
  if(props.item.id === 1)
  {
    return (picture0)
  }
  
  else if(props.item.id == 2)
  {
    return (picture1)
  }

  else{
    return(picture2)
  }
}

export default function MyWork(props){
 

    return (
      <div className="third--page" id = "myWork">
       
        <div className="work--container">
          <h1>
             {props.item.project}
             <hr className="line--2"></hr>
            <br></br> <br></br>
            <img className="work--photo" src={picture} />
            
            <br></br>
            <p1 className="work--container">
              <strong>Description: </strong> {props.item.description}
              <br></br>
              <strong>Tools:</strong> {props.item.tools}
              <br></br>
              <strong>Languages:</strong> {props.item.language}
              <br></br>
              <strong>Library: </strong>{props.item.library}
              <br></br>

              <a className="link--project"href = {props.item.link} target="_blank" rel="noopener noreferrer">see code</a>

            </p1>
          </h1>
        </div>
      </div>
    );
}