const {GraphQLNonNull, GraphQLString, GraphQLFloat} = require('graphql');

const { expenseType } = require("../types/expense");
const ExpenseModel = require("../../models/expense");

exports.update = {
  type: expenseType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString)
    },
    expenseType: {
      type: new GraphQLNonNull(GraphQLString),
    },
    amount: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    paidBy: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    },
    date: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    const {expenseType, amount, paidBy, description, date} = params;

    return ExpenseModel.findByIdAndUpdate(
      params.id,
      { $set: { expenseType, amount, paidBy, description, date} },
      { new: true }
    )
      .catch(err => new Error(err));
  }
}

