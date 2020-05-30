import React, { Component } from "react";
import PropTypes from "prop-types";
//import { withRouter } from "react-router-dom";

export class TodoItem extends Component {
  /*textStyle = () => {
    if (this.props.todo.done) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "underline" };
    }
  };*/
  textStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.done ? "#27496D line-through" : "none",
    };
  };

  //e for event
  //Use arrow func. for omit the binding
  /*check = (e) => {
    console.log(this.props);
  };
*/
  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={{ backgroundColor: "#AF8BAF" }}>
        <p style={this.textStyle()}>
          {/*access the father through props */}
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          {/*make a white space with {' '} ,use destructor in var so bind with (this, varName)*/}
          <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
/*style={fontColor}
const fontColor = {
  color: "lime",
};*/

const btnStyle = {
  backgroundColor: "maroon",
  color: "white",
  border: "none",
  borderRadius: "50%",
  padding: "3px 5px",
  float: "right",
  cunsor: "pointer",
};
export default TodoItem;
