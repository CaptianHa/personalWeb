import React from "react"

export default function FirstPage(){
    return(
        <div className="entire--page">
            <div className="first--page">
                <h1 className="header">
                    Hi, I'm Hayato.<br></br>I'm Majoring in <em>Computer Engineer.</em>
                </h1>
                <p1 className="first--about">
                    Currently a <strong>junior</strong>, attending Gonzaga University
                    <br></br>
                    A <em>developer, explorer, and problem-solver</em>
                    <br></br>
                    I value <em>integrity, Communication, Empathy, and Patience</em>
                    <br></br>
                    These properties guide me through my problem solving and even through <strong>Life</strong>
                </p1>
                <hr className="line-1"></hr>
            </div>
            <div className="second--page">
                <h2 className="header--second">About Me </h2>
                <p1 className="about--me"> I'm always curious by the nature that surrounds me and love exploring it
                <br></br>
                I also enjoy trying new things and meeting new people
                <br></br>
                Outside of school I enjoy surfing, fashion, photography, and sports
                </p1>
                <br></br>
                <div className="info">
                    
                        <div className="education"> <strong><u>Education</u></strong><br></br>Gonzaga University<br></br>junior</div>
                        <div className="nationality"><strong><u>Nationality</u></strong><br></br>Japanese</div>
                        <div className="location"> <strong><u>Locations</u></strong><br></br>Guam, USA<br></br>Washington, USA</div>
                        <div className="reading"><strong><u>Reading</u></strong><br></br>The Power of Habit<br></br>by Charles Duhigg</div>
                        <div className="favorite--sport"><strong><u>Favorite sport</u></strong><br></br>Basketball</div>
                        <div className="camera--system"><strong><u>Camera System</u></strong><br></br>Sony</div>
                    
                    
                </div>
            </div>

        </div>
        
    )
}