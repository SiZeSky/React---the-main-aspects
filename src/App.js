import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import react from "./img/react.png"

class App extends React.Component {
helpText = "Help text!"
render () {
    return (<div className="box">
        <Header title="Шапка сайта"/>
        <Header title="Шапка сайта!"/>
        <Header title="!!!"/>
        <h1>{this.helpText}</h1>
    <input placeholder={this.helpText} onClick={this.inputClick} onMouseEnter={this.mouseOver} />
    <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
    <Image image={react}/>
    <img src={react} />
    </div>)
}

 inputClick () {console.log("Clicked")}
  mouseOver () {console.log("Mouse Over")}
}

export default App