const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  expenseType: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paidBy: {
    type: String,
    required: true
  },
  description: String,
  date: {
    type: Number,
    required: true
  }
});

const Model = mongoose.model('Expense', expenseSchema);

module.exports = Model;
