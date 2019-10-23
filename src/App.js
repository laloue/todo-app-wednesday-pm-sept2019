import React, { Component } from "react";
import Header from "./Header";
import ItemCount from "./ItemCount";
import AddItem from "./AddItem";
import Item from "./Item";
import "./App.css";

class App extends Component {
  state= {
    tasks:[
      {test: "shopping", completed: true, date:"2019-10-23", id: 1},
      {test: "cleaning", completed: true, date:"2019-10-24", id:2},
      {test: "sleeping", completed: false, date:"2019-10-28",id:3 },
      {test: "cooking", completed: true, date:"2019-10-23", id:4},
    ]
  }
  render() {
    return (
      <div className="container">
        <Header />
        <AddItem />
        <ItemCount count={this.state.tasks.length} />
        {this.state.tasks.map(task=>{
          return <Item text={task.test} completed={task.completed}/>
        })}

      
      </div>
    );
  }
}

export default App;
