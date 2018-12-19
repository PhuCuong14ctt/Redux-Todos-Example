// @flow

import React from "react";
import PropTypes from "prop-types";

type TodoType = {
  onClick: Function,
  completed: boolean,
  text: string,
  created_at: string
};

const Todo = ({ onClick, completed, text, created_at }: TodoType) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text} - {created_at}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
