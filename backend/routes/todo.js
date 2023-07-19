const router = require('express').Router();

let Todo = require('../modal/todo.modal');

router.route('/').get((req, res) => {
  Todo.find()
    .then((doc) => res.json(doc))
    .catch((err) => console.log(err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const complete = req.body.complete;
  const date = Date(req.body.date);

  console.log(req.body);

  const newTodo = new Todo({
    title,
    complete,
    date,
  });
  newTodo
    .save()
    .then(() => console.log('new todo added'))
    .catch((err) => console.log(err));
});

router.route('/delete/:id').delete((req, res) => {
  Todo.findByIdAndDelete({ _id: req.params.id })
    .then(() => console.log('todo deleted'))

    .catch((err) => console.log(err));
});

router.route('/update/:id').put((req, res) => {
  Todo.findByIdAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      complete: req.body.complete,
      date: Date(req.body.date),
    }
  )
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));
});
module.exports = router;
