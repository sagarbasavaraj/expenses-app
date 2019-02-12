const {GraphQLObjectType, GraphQLNonNull,
  GraphQLID, GraphQLString, GraphQLFloat} = require("graphql");

// User Type
exports.expenseType = new GraphQLObjectType({
  name: "expense",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    expenseType: {
      type: GraphQLString
    },
    amount: {
      type: GraphQLFloat
    },
    paidBy: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    }
  })
});
