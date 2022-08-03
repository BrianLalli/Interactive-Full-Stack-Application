const express = require('express');
const { getEmployees, setEmployee, updateEmployee, deleteEmployee } = require('../controller/employeeController');
const router = express.Router();

//send get and post routes to controller
router.route('/').get(getEmployees).post(setEmployee)

//send delete and put requests to the /:ID specific controller
router.route('/:id').delete(deleteEmployee).put(updateEmployee)

module.exports = router;