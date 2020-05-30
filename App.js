import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddTodo from "./components/AddTodo";
//import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      }),
    });
  };
  /* localhost version
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Meeting",
        done: true,
      },
      {
        id: uuidv4(),
        title: "Moping",
        done: true,
      },
      {
        id: uuidv4(),
        title: "Jogging",
        done: false,
      },
    ],
  };
  //Delete todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id != id)],
    });
  }; 
  //Add todo
  addTodo = (title) => {
    //define the pattern
    const newTodo = {
      id: uuidv4(),
      title,
      done: false,
    };
    //[...]copy the origin state in todos
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };*/

  //Delete todo with API

  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos${id}`)
      .then(
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      )
      .catch((err) => "There's something wrong with delete" + err);
  };

  //Add todo with API
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }))
      .catch((err) => "Fail to add new Todo" + err);
  };

  render() {
    //const { id, done } = this.props.todo;
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/">
              <AddTodo addTodo={this.addTodo} />
              <Todos
                todos={this.state.todos}
                markComplete={this.markComplete}
                delTodo={this.delTodo}
              />
            </Route>
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
