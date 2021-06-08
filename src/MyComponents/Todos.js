import React from 'react'
import Todo from './Todo'
export default function Todos(props) {
    const myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h4 className=" my-3">Todos list</h4>
            {props.todos.length === 0 ? "no todos to display" :
                props.todos.map((todo) => {
                    return (
                        <>
                            <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
                            <hr />
                        </>
                    )
                })}

        </div>
    )
}
