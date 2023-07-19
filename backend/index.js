const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.mongodb_url);

app.use(express.json());
app.use(cors());

const todoRouter = require('./routes/todo');
app.use('/todo', todoRouter);

app.listen('3002', (req, res) => {
  console.log('app listened');
});
