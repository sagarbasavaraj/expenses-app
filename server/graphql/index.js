const {GraphQLSchema, GraphQLObjectType} = require('graphql');

const {queryType} = require('./queries/expense');
const mutation = require('./mutations/index');

exports.expenseSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
})

