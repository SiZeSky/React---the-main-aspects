/*
------------------------Пример работы с переменной-----------------------------------
У нас есть метод inputClick, теперь же будем обращаться к переменной, которая есть в App:
inputClick () {
    this.helpText = "Changed" 
    console.log("Clicked")
}
    И, по логике, переменная в классе App должна была поменяться, но ничего не поменялось, наоборот, начало выдавать ошибку. Чтобы нам в динамическом формате менять подобные переменные, для это существуют состояния.
----------------------------Конструктор----------------------------------------------
В любом классе существует constructor (встроенная функция), который записываем в класс App:
class App extends React.Component {
    constructor (props) {
        super(props)
        
    }
super - конструктор родительского класса (того самого React, а super - его метод), а с помощью props мы как бы передаем различные свойства, которые ВОЗМОЖНО будут переданы внутрь компонента App, помимо этого, props должен выступать в качестве параметра в самом нашем конструкторе(потому что мы должны что то из конструктора вынимать, а уже посредством props передавать куда то)
-----------------------------Работа с состояниями------------------------------------
Теперь обращаемся к состоянию:
        super(props)
        this.state = {
        helpText: "Help text!",
        }
Вот так мы прописали стандартное состояние для объекта helpText, мы можем ему записать множество состояний, но знакомимся пока с одним, поэтому и ставим запятую после прописи состояния. Ну и убираем нашу переменную helpText, так как теперь она в качестве состояния в конструкторе, и, поэтому, к этому состоянию нам нужно обращаться теперь в качестве(this.state.helpText)
---------------------------Установка состояния---------------------------------------
Теперь же нам нужно менять это состояние в нашем обработчике событий:
this.setState({helpText: "Changed"})  здесь мы в качестве параметра передаем объект helpText, в самом объекте прописываем ключ после двоеточий, а сам ключ - то состояние, на которое мы хотим изменить дефолтное.
НО! Чтобы это заработало, внутри конструктора нам нужно прописать следующее значение:
this.inputClick = this.inputClick.bind(this)
----------------------------------Данные от пользователя-----------------------------
Теперь попробуем получать данные от пользователя и полученную информацию будем выводить на экран. В ванильном JS на это потребовалось бы много времени и сил, однако в React это можно сделать довольно быстро. Для начала, создадим новое состояние в конструкторе:
userData: "" (Кстати, в состояние можно и числа кидать, но в нашем случае будет пустая строка)
Создаем новый тег h2, в котором будет приниматься наше состояние:
<h2>{this.state.userData}</h2> 
Добавляем новый обработчик событий onChange, который будет срабатывать каждый раз, когда пользователь что то будет вводить в input поле, который будет с параметром event, через этот параметр мы сможем получить информацию, которую ввел пользователь далее делаем setState в качестве изменяемого объекта userData, а в качестве значения будет то, что будет прописывать пользователь (event.target.value):
    onChange={event => this.setState({userData: event.target.value})}
Если проще: Каждый раз, когда пользователь что то вводит, мы это отслеживаем, мы получаем эти данные и устанавливаем их в качестве значения для состояния userData
*/

import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import App from './App'
import './css/main.css'

const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App />)

