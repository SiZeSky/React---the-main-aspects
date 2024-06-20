/* 
Через ReactDOM можно обратиться к любому объекту из HTML документа (как пример, определенный HTML тег)
По сути эта функция, а в скобках мы записываем параметры (первый параметр, что мы будем выводить, а второй обозначает, куда мы будем выводить):
ReactDOM.render(<h1>Привет</h1>, document.getElementById("app"))
Таким образом, мы говорим функции, что она должна вывести тег h1 с содержимым в элемент под id "app"
Однако, если мы захотим вывести в таком порядке теги:
ReactDOM.render(<h1>Привет</h1><h2>Hello</h2>, document.getElementById("app"))
Нам выдаст ошибку.
Все потому, что тег h1 - это, как бы, родительский тег, собственно, как и h2 в данном случае, а render может вывести только один родительский тег
Чтобы сделать это все корректно, нужно оба этих тега вывести под одним общим родительским тегом:
ReactDOM.render(<div>
    <h1>Привет</h1><h2>Hello</h2>
</div>, document.getElementById("app"))
Родтельский тег - div, а наши h1 и h2 - дочерние, которые прописаны в нем
---------------------------Технология JSX--------------------------------------------
Ранее, мы создавали HTML блоки по принципу: написал теги в HTML теге и вывел их в качестве строки. С помощью React мы не создавали блоки в HTML документе, а создали их с помощью JS документа, причем обработалось это все корректно:
ReactDOM.render(<div>
    <h1>Привет</h1><h2>Hello</h2>
</div>, document.getElementById("app"))
Так произошло благодаря технологии, как JSX, находящаяся в библиотеке React.
JSX - Java Script XML
Суть этой технологии сводится к тому, что мы действительно можем сразу же прописывать HTML объекты в JS документе через метод ".render", создавая структуру в нужных нам HTML объектах
Рассмотрим разницу с использованием JSX технологии и без ее использования, выявив ее удобства.
Например, нам нужно создать через React input поле. Как мы это сделаем через JSX:
ReactDOM.remder(<input placeholder="Help text" />, document.getElementById("app"))
И как мы будем это делать без JSX:
ReactDOM.render(React.createElement('input', {
    placeholder: "Help text",
    onClick: () => console.log("Clicked"),
    onMouseEnter: () => console.log("Mouse Over",)
}), document.getElementById("app"))
Еще пример использования JSX;
Создадим две константы с такими значениями:
const elements = <input placeholder="Help text" />
const app = document.getElementById("app")
А теперь создадим их спомощью рендера:
ReactDOM.render(elements, app)
Теперь render выглядит еще проще и короче.
-------------------------------Обработка событий-------------------------------------
Теперь нашему input полю добавим обработчик событий
const elements = <input placeholder="Help text" onClick="" />
Так мы делали в обычном HTML формате, однако, в JSX немного по-другому
const elements = <input placeholder="Help text" onClick={} />
Вместо кавычек используем фигурные скобки. Это нужно потому, что в React мы прописываем HTML код и если мы хотим внутрь этого HTML кода добавить какие - либо условия, циклы, выполнение функций или просто вывод переменных, в таких случаях используются фигурные скобки
А теперь что по поводу обработчика событий и создание функций:
const elements = <input placeholder="Help text" onClick={inputClick} />
Вот так мы записываем обработчик событий в HTML коде
const inputClick = () => console.log("Clicked")
Да, это новый формат написания функции, который доступен в React
const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")
const elements = <input placeholder="Help text" onClick={inputClick} onMouseEnter={mouseOver} />
-----------------------------Создание переменных-------------------------------------
Создадим const:
const helpText = "Help text!"
Теперь можем просто подставить ее в наше input поле:
<input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
Помимо этого, в константе elements мы можем прописывать сколько угодно различных HTML объектов, а также переменных к ней и условий:
const elements = (<div>
    <h1>{helpText}</h1>
<input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
</div>)
----------------------------------Условия--------------------------------------------
Создадим тег p в нашем elements и сразу же пропишем вот такое условие:
<p>{helpText == "Help text!" ? "Yes" : "No"}</p>
Оно означает следующее: Если наша переменная равна строчке "Help text!", То: знак "?" обозначает грубо говоря ответ на выходе, то есть если да, то такое значение, если нет, то такое.
В нашем случае идет так: если условие верное, то на выход или внос в тег p "Yes", а если (за раздел истины и лжы обозначает знак ":") нет, то "No"
-------------------------------Классы для тегов--------------------------------------
Чтобы в JSX присваивать классы к тегам, достаточно не просто в атрибуте прописать "class=""" А нужно прописывать следующим образом:
const elements = (<div className="box">
Дело в том, что если просто прописывать "class", то это значение будет конфликтовать с классами, которые можно прописывать в качестве JS кода (для описания и задавания параметров для объектов, например)
*/

const inputClick = () => console.log("Clicked")
const mouseOver = () => console.log("Mouse Over")

const helpText = "Help text!"

const elements = (<div className="box">
    <h1>{helpText}</h1>
<input placeholder={helpText} onClick={inputClick} onMouseEnter={mouseOver} />
<p>{helpText == "Help text!" ? "Yes" : "No"}</p>
</div>)

const app = document.getElementById("app")

ReactDOM.render(elements, app)