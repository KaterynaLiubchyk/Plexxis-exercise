const express = require('express')
const cors = require('cors')
const app = express()
const employees = require('./data/employees.json');

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

app.get('/api/employees', cors(corsOptions), (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify(employees, null, 2));
})

app.post('/api/employees/add', (req, res, next) => {
    const newEmployee = req.body
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(newEmployee);
  })

  app.delete('/api/employees/delete/:id', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(`Employee with id ${req.params.id} removed successfuly`)
  })

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))
