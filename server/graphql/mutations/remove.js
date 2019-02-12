const {GraphQLNonNull, GraphQLString} = require('graphql');

const { expenseType } = require("../types/expense");
const ExpenseModel = require("../../models/expense");

exports.remove = {
  type: expenseType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedExpense = ExpenseModel.findByIdAndRemove(params.id).exec();
    if (!removedExpense) {
      throw new Error('Error')
    }
    return removedExpense;
  }
}
