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
  mutation($id: String!) {
    removeExpense(id: $id) {
      id
    }
  }
`;
