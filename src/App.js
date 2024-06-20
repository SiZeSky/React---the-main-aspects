import React from "react"
import Header from "./components/Header"

import react from "./img/react.png"

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        helpText: "Help text!",
        }

        this.inputClick = this.inputClick.bind(this) //Здесь мы как бы обращаемся к нашему методу inputClick, потом после равно я записываю обращение к этому же методу и дополнительно еще к такому методу, как bind, которое вызывает определенное событие, и в качестве события мы прописываем this, то есть как бы говоря, что мы передаем в наш обработчик событий весь этот наш компонент. Проще говоря, теперь наш же метод inputClick благодаря этой строчке кода может взаимодействовать с состояниями и сможет их изменять
    }

render () {
    return (<div className="box">
        <Header title="Шапка сайта"/>
        <Header title="Шапка сайта!"/>
        <Header title="!!!"/>
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2> 
    <input placeholder={this.state.helpText}
    onChange={event => this.setState({userData: event.target.value})}
    onClick={this.inputClick}
    onMouseEnter={this.mouseOver} />
    <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
    <img src={react} />
    </div>)
}

inputClick () {
    this.setState({helpText: "Changed"})  
    console.log("Clicked")
}
mouseOver () {console.log("Mouse Over")}
}

export default App