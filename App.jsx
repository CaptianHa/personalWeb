import React from "react"
import Nav from"./components/Nav"
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage"


export default function App(){
    return(
        <div>
            <Nav/>
            <FirstPage/>
            <SecondPage/>
        </div>
    )
}
