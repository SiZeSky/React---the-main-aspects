import React from "react"
import AddUser from "./AddUser"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render () {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete" /> {/*Рабочая кнопка удаления пользователя*/}
            
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm //В этой записи говорится, что при нажатии на кнопку значение состояния editForm будет менять на противоположное (если будет false, станет true и наооборот)
                    })
                }} className="edit-icon" />
                <h3>{this.user.first_name} {this.user.last_name},</h3>
                <img src={this.user.avatar} />
                <p>{this.user.email}</p>
                <b>{this.user.isHappy === true ? 'Счастлив :)' : 'Грустный :('}</b>

                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />} {/*Тут мы просто говорим, что если у нас состояние editForm true (просто пишем само состояние, если значение истина необязательно прописывать ==true), то с помощью && мы выводим следующее: форму из AddUser*/}
            </div>
        )
    }
    }

    export default User