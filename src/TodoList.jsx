import React from "react";
import {
  Paper,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@material-ui/core";

export default function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <ListItem>
              <ListItemText>{todo.task}</ListItemText>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}