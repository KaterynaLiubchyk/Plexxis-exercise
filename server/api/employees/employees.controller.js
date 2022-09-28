const employees = require('../../data/employees.json');

exports.getEmployees = async(req, res, next) => {
    try {

      return res.status(200).json(employees);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };