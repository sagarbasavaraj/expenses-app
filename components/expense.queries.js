import gql from "graphql-tag";

export const EXPENSES_LIST = gql`
  {
    expenses {
      id
      expenseType
      date
      amount
      paidBy
      description
    }
  }
`;

export const REMOVE_EXPENSE = gql`
  mutation($id: ID!) {
    removeExpense(id: $id) {
      id
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation(
    $expenseType: String!
    $amount: Float!
    $date: Float!
    $paidBy: String!
    $description: String
  ) {
    addExpense(
      expenseType: $expenseType
      amount: $amount
      date: $date
      paidBy: $paidBy
      description: $description
    ) {
      id
      expenseType
      amount
      date
      paidBy
      description
    }
  }
`;

export const UPDATE_EXPENSE = gql`
  mutation(
    $id: ID!
    $expenseType: String!
    $amount: Float!
    $date: Float!
    $paidBy: String!
    $description: String
  ) {
    updateExpense(
      id: $id
      expenseType: $expenseType
      amount: $amount
      date: $date
      paidBy: $paidBy
      description: $description
    ) {
      id
      expenseType
      amount
      date
      paidBy
      description
    }
  }
`;

export const FIND_EXPENSE = gql`
  query Expense($id: ID!) {
    expense(id: $id) {
      id
      expenseType
      date
      amount
      paidBy
      description
    }
  }
`;
