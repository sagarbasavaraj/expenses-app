const addExpense = require('./add').add;
const removeExpense = require('./remove').remove;
const updateExpense = require('./update').update;

module.exports = {
  addExpense,
  removeExpense,
  updateExpense
};