import './App.css';
import { React, useState, useEffect } from 'react'
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer'
import AddTodo from './Components/AddTodo'
import uuid from 'react-uuid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';


function App() {

  const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse([localStorage.getItem("todos")]) : [])
  // {
  //   id: 1,
  //   title: "Goto Market",
  //   desc: "You need to go to the Market to get this job done!"
  // },
  // {
  //   id: 2,
  //   title: "Goto Mall",
  //   desc: "You need to go to the Mall to get this job done!"
  // },
  // {
  //   id: 3,
  //   title: "Goto Ghat",
  //   desc: "You need to go to the Ghat to get this job done!"
  // }


  const onDelete = (todoItem) => {
    setTodos(todos.filter((e) => {
      return e !== todoItem;
    }))
  }

  const addTodo = (title, desc) => {
    const newlyAddedTodo = {
      id: uuid(),
      title: title,
      desc: desc
    }

    setTodos([...todos, newlyAddedTodo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Router>
      <Header title="My TODOs List" search={true} />
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
          <Route path="/about" render={() => {
            return <About/>
          }}>

          </Route>
        </Switch>     
        <Footer />
      </Router>
    </div>
  );
}

export default App;
