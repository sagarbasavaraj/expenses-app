import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import { Container } from "./common/layout";
import ExpenseList from "./expense-list";

const EXPENSES_LIST = gql`
  {
    expenses {
      expenseType
      date
      amount
      paidBy
      description
    }
  }
`;

const Content = styled(Container)`
  padding: 70px 0;
`;

const AppContent = () => (
  <Query query={EXPENSES_LIST}>
    {({ data, loading }) => {
      if (loading || !data) {
        return <div>Loading ...</div>;
      }
      console.log(data);
      return (
        <Content>
          <ExpenseList expenses={data.expenses} />
        </Content>
      );
    }}
  </Query>
);

export default AppContent;
