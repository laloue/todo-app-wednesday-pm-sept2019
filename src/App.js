import React, { Component } from "react";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem";
import Item from "./Item";
import "./App.css";

class App extends Component {
  state = {
    tasks: [
      { test: "shopping", completed: true, date: "2019-10-23", id: 1 },
      { test: "cleaning", completed: true, date: "2019-10-24", id: 2 },
      { test: "sleeping", completed: false, date: "2019-10-28", id: 3 },
      { test: "cooking", completed: true, date: "2019-10-23", id: 4 },
    ]
  }
  render() {
    const completedTasks = this.state.tasks.filter(task => {
      return task.completed;
    });

  const incompleteTasks = this.state.tasks.filter(task => {
    return task.completed ? false : true;
     
});

console.log(completedTasks)
console.log(incompleteTasks)


return (
  <div className="container">
    <Header />
    <AddItem />
    <ItemCount count={this.state.tasks.length} />

    <h3> Tasks to Completed</h3>
    {completedTasks.map(task => {
    return <Item text={task.test} completed={task.completed} key={task.id}/>
    })}
    <h3> Tasks to complete</h3>
    {completedTasks.map(task => {
    return <Item text={task.test} completed={task.incompleted} key={task.id} />
    })}


  </div>
);
  }
}

export default App;
