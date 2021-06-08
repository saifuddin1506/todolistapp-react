import React from 'react'
export default function Todo({todo,onDelete}) {
    return (
        <div>
                <p>{todo.title}</p>
                <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm my-3" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
