const router = require('express').Router();
const controller = require('./employees.controller');

router.get('/employees', controller.getEmployees);