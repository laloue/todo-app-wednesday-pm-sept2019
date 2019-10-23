import React, { Component } from "react";
import uuid from "uuid/v4";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem";
import Item from "./Item";
import "./App.css";


class App extends Component {
  state = {
    tasks: [
      { test: "shopping", completed: true, date: "2019-10-23", id: uuid()},
      { test: "cleaning", completed: true, date: "2019-10-24", id: uuid ()},
      { test: "sleeping", completed: false, date: "2019-10-28", id: uuid() },
      { test: "cooking", completed: true, date: "2019-10-23", id: uuid() },
    ]
  }


  //this fundction should update the state with a new task
addNewTask= taskText => {
  const tasksCopy =this.state.tasks.slice();
  const newTask= {
    text: taskText,
    completed:false,
    date:"2019-10-23",
    id: uuid()
  };
  tasksCopy.push(newTask)

  this.setState({
    tasks: tasksCopy
  });
};



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
    <AddItem addNewTaskFunc={this.addNewTask}/>
    <ItemCount count={this.state.tasks.length} />

    <h3> Tasks Completed</h3>
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
