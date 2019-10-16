const mongoose = require('mongoose');
require('dotenv').config();
const _ = require('lodash');

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGO_URI, {
  reconnectTries: 60, // retry to connect for 60 times
  reconnectInterval: 1000, // wait 1 second before retrying
  useNewUrlParser: true,
});

const Employees = require('../employees.model');
const employeesData = require('../jsonData/employees.json');
const esService = require('../../services/esService');

async function insertEmployees(employeesData) {
  let data = await Employees.insertMany(employeesData);
  await bulkInsertInEs(data);
}

async function bulkInsertInEs(esData) {
  try {
    let esObject = await prepareObject(esData);
    await esService.BulkIndex(esObject);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    console.error(':::::error: catch block error:::::');
  }
}

async function prepareObject(employees) {
  let string = '';
  let esObject = employees.map(emp => {
    let bodyObject = _.pick(emp, [
      'firstName',
      'lastName',
      'designation',
      'salary',
      'dateOfJoining',
      'address',
      'age',
      'maritalStatus',
    ]);
    console.log('bodyObject) ', bodyObject)
    let indexObject = {
      index: {
        _id: emp._id,
      },
    };
    return (
      string + `${JSON.stringify(indexObject)}\n${JSON.stringify(bodyObject)}\n`
    );
  });
  return esObject;
}

insertEmployees(employeesData);