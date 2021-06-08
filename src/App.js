import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {


  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  //deelting todso
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }




  //adding todos
  const addTodo = (title, desc) => {

    let sno;
    if (todos.length === 0)
      sno = 1;
    else
      sno = todos[todos.length - 1].sno + 1;
    let data = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, data]);
    console.log("data");
  }

  return (

    <Router>
      <div className="App">
        <Header title="my todos list" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
