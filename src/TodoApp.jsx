import React, { useState } from "react";
import { Paper, Typography, AppBar, Toolbar, Grid } from "@material-ui/core";
import TodoList from "./TodoList";
export default function TodoApp() {
  const initialTodos = [
    { id: 1, task: "clean car", completed: false },
    { id: 2, task: "wash cat", completed: true },
    { id: 3, task: "grow beard", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with hooks</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
}
