import React from 'react'
import headshot from '../images/headShot.jpg'

export default function SecondPage(){
    return(
        <div className="entire--page">
            <div className="second--page">
                <h2 className="header">About Me.</h2>
                <div className="second--main">        
                    <div className="about"> 
                        <br></br>
                        Born and raised on the island of Guam  
                        <br></br>
                        Grew up by a beach and quickly became an ocean lover
                        <br></br>
                        Always curious by the nature that surrounds me and love exploring it
                        <br></br>
                        I also love trying new things and meeting new people
                        <br></br>
                        Outside of school I enjoy surfing, fashion, and photography
                        <br></br>
                        Read more me of <em><a className = "link--project" href = "https://www.postguam.com/sports/local/tsujii-eyes-engineering-path-at-gonzaga/article_a2ff28a4-c02a-11ea-95de-9340259e7bf4.html" target="_blank" rel="noopener noreferrer">here</a></em>
                    </div>
                    <br></br>
                    <img className = "headShot"src={headshot} />
                </div>             
                <div className="info">
                    
                        <div className="info--detailed"><strong><u>Experience</u></strong><br></br>3 years</div>
                        <div className="info--detailed"><strong><u>Nationality</u></strong><br></br>Japanese</div>
                        <div className="info--detailed"> <strong><u>Locations</u></strong><br></br>Guam, USA<br></br>Washington, USA</div>
                        <div className="info--detailed"><strong><u>Reading</u></strong><br></br>The Power of Habit<br></br>by Charles Duhigg</div>
                        <div className="info--detailed"><strong><u>Favorite sport</u></strong><br></br>Basketball</div>
                        <div className="info--detailed"><strong><u>Camera System</u></strong><br></br>Sony</div>
                    
                    
                </div>
                <hr className="line-1"></hr>
                <h1 className="header">My Projects.</h1>
            </div>
            
        </div>
    )
}