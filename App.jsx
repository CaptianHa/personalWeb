import React from "react"
import Nav from"./components/Nav"
import FirstPage from "./components/FirstPage"
import SecondPage from "./components/SecondPage"
import MyWork from "./components/Mywork"
import workData from "./workData"
import Footer from "./components/Footer"
export default function App(){

    const work = workData.map(item => {
        return (
        <MyWork
         key={item.id} 
         item={item} 
         />
        )
    })

    return (
      <div>
        <Nav />
        <FirstPage />
        <SecondPage />
        <section className="work--info">
            {work}
        </section>
        <Footer/>
      </div>
    );
}
