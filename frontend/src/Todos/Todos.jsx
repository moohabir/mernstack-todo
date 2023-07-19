import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CreateTodo from '../CreateTodo';
import Add from '@mui/icons-material/Add';

import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import TodoLis from './TodoLis';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [updatedTodos, setUpdatedTodos] = useState({});
  const [open, setOpen] = useState(false);

  //const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3002/todo')
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const Delete = (id) => {
    axios
      .delete(`http://localhost:3002/todo/delete/${id}`)

      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodos((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const Update = (todo) => {
    setUpdatedTodos(todo);
    console.log(todo);
    //console.log(todos);
    setOpen(true);
    //setTitle(updatedTodos.title);
  };

  //below is for the update Save button after updating
  const SaveUpdatedTodos = async () => {
    //e.preventDefault();
    console.log(updatedTodos);
    await axios
      .put(
        `http://localhost:3002/todo/update/${updatedTodos._id}`,
        updatedTodos
      )

      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Update Todo
          </Typography>
          <form onSubmit={SaveUpdatedTodos}>
            <Stack spacing={2}>
              <TextField
                label="Title"
                name="title"
                value={updatedTodos && updatedTodos.title}
                onChange={handleChange}
                autoFocus
                required
              />
              <TextField
                label="Complete time"
                name="complete"
                value={updatedTodos && updatedTodos.complete}
                onChange={handleChange}
                required
              />

              <Button type="submit">Save</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>

      <CreateTodo />

      <TodoLis
        todos={todos}
        setOpen={setOpen}
        Delete={Delete}
        Update={Update}
      />
    </div>
  );
}

export default Todos;
