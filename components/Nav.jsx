import React from "react"

export default function Nav(){
    return(
        <div>
            <nav className ="nav--bar">
                <a href = "#myWork" className="nav--links">My work</a>
                <div className="vertical--line"></div>
                <a href = "#footer" className="nav--links">Get in touch</a>
            </nav>
        </div>
    )
}