const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = require("graphql");

const ExpenseModel = require("../../models/expense");
const expenseType = require("../types/expense").expenseType;

// Query
exports.queryType = new GraphQLObjectType({
  name: "Query",
  fields: () => {
    return {
      expenses: {
        type: new GraphQLList(expenseType),
        resolve: () => {
          const expenses = ExpenseModel.find().sort({date: -1, amount: -1}).exec();
          if (!expenses) {
            throw new Error("Error");
          }
          return expenses;
        }
      },
      expense: {
        type: expenseType,
        args: {
          id: {
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        resolve: (root, params) => {
          const expense = ExpenseModel.findById(params.id).exec();
          if (!expense) {
            throw new Error("Error");
          }
          return expense;
        }
      }
    };
  }
});
