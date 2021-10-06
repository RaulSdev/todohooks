import { Paper, TextField } from "@material-ui/core";
import React from "react";
import useInputState from "./useInputState";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState(" ");
  return (
    <Paper>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}
