const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

mongoose.connect(
  'mongodb+srv://moohabir:Moohabir25@mycluster1.43hzzre.mongodb.net/merndatabase'
);

app.use(express.json());
app.use(cors());

const todoRouter = require('./routes/todo');
app.use('/todo', todoRouter);

app.listen('3002', (req, res) => {
  console.log('app listened');
});
