import React, { useEffect, useState } from "react"
// Обычно функции используют для маленьких компонентов
const Button = (props) => {
    const [click, setClick] = useState(0)

    useEffect(() =>  // В качестве параметра он принимает еще один метод в качестве функции
    {
    document.title = `Вы нажали ${click}`// Таким образом при нажатии этот вебхук будет менять название страницы каждый раз, когда будут нажимать на кнопку
    })

        return (
            <button onClick={() => setClick(click + 1)}>{props.text} {click}</button>
        )
    }

Button.defaultProps = {
    text: "Нажатий: "
}

    export default Button