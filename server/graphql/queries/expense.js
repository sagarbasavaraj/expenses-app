const { GraphQLObjectType, GraphQLList } = require("graphql");

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
          const expenses = ExpenseModel.find().exec();
          if (!expenses) {
            throw new Error("Error");
          }
          return expenses;
        }
      }
    };
  }
});
