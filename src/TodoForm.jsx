import { Paper, TextField } from "@mui/material";
import React from "react";
import useInputState from "./hooks/useInputState";

export default function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState(" ");
  return (
    <Paper style={{ margin: "1rem", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
