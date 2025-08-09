const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory database
let tasks = [
  { id: 1, title: 'Learn REST API', done: false },
  { id: 2, title: 'Write code', done: true }
];

// GET: all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET: single task by ID
app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');
  res.json(task);
});

// POST: create a new task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    done: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT: update a task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');

  task.title = req.body.title !== undefined ? req.body.title : task.title;
  task.done = req.body.done !== undefined ? req.body.done : task.done;
  res.json(task);
});

// DELETE: remove a task
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
