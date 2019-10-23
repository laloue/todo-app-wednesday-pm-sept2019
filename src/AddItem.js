import React from "react";

//controlled components
class AddItem extends React.Component {
  state ={
    newItemText:""
  }
  //Function which update state must always live where the State lives
  updateNewItemText= (event) => {
    console.log(event.target.value)
    //this function should update the state whenever someone types
    this.setState({
      newItemText:event.target.value
    });
  };

  handleClick=(event) =>{
    event.preventDefault();
    this.props.addNewTaskFunc(this.state.newItemText);
    this.setState({
      newItemtext:""
    });
  }

  render() {
    // JSX
    return (
      <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            id="newItem"
            placeholder="Type an item here"
            value={this.state.newItemText}
            onChange={this.updateNewItemText}

          ></input>
        </div>
        {/* this is a comment in JSX */}
        <button type="submit" className="btn btn-primary mb-2" onClick={this.handleClick} disabled  >
          Add to List
        </button>
      </form>
    )
  };
}

export default AddItem;
