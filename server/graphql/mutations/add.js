const { GraphQLFloat, GraphQLString, GraphQLNonNull } = require("graphql");

const { expenseType } = require("../types/expense");
const ExpenseModel = require("../../models/expense");

exports.add = {
  type: expenseType,
  args: {
    expenseType: {
      type: new GraphQLNonNull(GraphQLString)
    },
    amount: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
    date: {
      type: new GraphQLNonNull(GraphQLFloat)
    },
    paidBy: {
      type: new GraphQLNonNull(GraphQLString)
    },
    description: {
      type: GraphQLString
    }
  },
  resolve(root, params) {
    const expModel = new ExpenseModel(params);
    const expense = expModel.save();
    if (!expense) {
      throw new Error("Error");
    }
    return expense;
  }
};
