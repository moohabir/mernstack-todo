import { Button, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function TodoLis({ todos, setOpen, Delete, Update }) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(198, 178, 211, 1)',
        marginTop: '20px',
      }}
    >
      {todos.map((todo) => (
        <div key={todo._id}>
          <Typography variant="h6">Todo lists</Typography>
          <Typography variant="h6">{todo.title}</Typography>
          <Typography variant="h6">{todo.complete}</Typography>
          <Typography variant="body2">
            {new Date(todo.date).toLocaleDateString()}
          </Typography>
          <div>
            <Button onClick={() => Update(todo)}>Update</Button>
            <Button onClick={() => Delete(todo._id)}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoLis;
