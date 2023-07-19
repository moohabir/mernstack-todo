import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';

function CreateTodo() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [complete, setComplete] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    //e.preventDefault();
    axios
      .post('http://localhost:3002/todo/add', { title, complete, date })
      .then((response) => {
        console.log(response);
        //setTodos([...todos, { title, complete, date }]);
        //navigate('/todo');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ gap: '10px' }}>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          CreateTodos
        </Typography>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: '10px', width: '100%' }}
          />
          <TextField
            type="text"
            placeholder="Time to complete"
            value={complete}
            onChange={(e) => setComplete(e.target.value)}
            style={{ marginBottom: '10px', width: '100%' }}
          />

          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{ backgroundColor: 'rgba(198, 178, 211, 1)' }}
          >
            Create todo
          </Button>
        </form>
      </div>
    </div>
  );
}

export default CreateTodo;
