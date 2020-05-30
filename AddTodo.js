import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: " ",
  };
  //no need to use props cuz the state to change is in the same component
  onChange = (e) => this.setState({ title: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    //use props to pass "this.state.title" up to addTodo()
    this.props.addTodo(this.state.title);
    //clean the blank after the up-passing
    this.setState({ title: "" });
  };
  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="And also..."
          name="title"
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Add"
          style={{ flex: "1" }}
          className="btn"
        />
      </form>
    );
  }
}

//set propTypes
AddTodo.propTypes = {
  AddTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default AddTodo;
