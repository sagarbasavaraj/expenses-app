import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

import { Container } from "./common/layout";

const EXPENSES_LIST = gql`
  {
    expenses {
      expenseType
    }
  }
`;

const Content = styled(Container)`
  padding-top: 80px;
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
          <p>hello</p>
        </Content>
      );
    }}
  </Query>
);

export default AppContent;
