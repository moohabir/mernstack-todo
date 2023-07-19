import { Typography } from '@mui/material';
import './App.css';
import Todos from './Todos/Todos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Typography
        variant="h3"
        fontWeight="bold"
        fontSize="24px"
        margin="15px"
      >
        MERN Fullstack Todo App{' '}
      </Typography>

      <Todos />
    </div>
  );
}

export default App;
