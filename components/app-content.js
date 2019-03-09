import React, { Component } from "react";
import { Query, compose, graphql } from "react-apollo";
import styled from "styled-components";

import AppHeader from "./header";
import AppFooter from "./footer";
import { Container } from "./common/layout";
import ExpenseList from "./expense-list";
import Expense from "./expense";

import { EXPENSES_LIST, REMOVE_EXPENSE } from "./expense.queries";

const Content = styled(Container)`
  padding: 70px 0;
  z-index: 5;
`;

class AppContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <Query query={EXPENSES_LIST}>
          {({ data, loading }) => {
            if (loading || !data) {
              return <Content>Loading ...</Content>;
            }
            return (
              <Content>
                <ExpenseList
                  expenses={data.expenses}
                  deleteExpense={this.props.deleteExpense}
                />
              </Content>
            );
          }}
        </Query>
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default compose(
  graphql(REMOVE_EXPENSE, {
    name: "deleteExpense",
    options: {
      update: (proxy, { data: { removeExpense } }) => {
        let data = proxy.readQuery({ query: EXPENSES_LIST });
        data = {
          ...data,
          expenses: data.expenses.filter(item => item.id !== removeExpense.id)
        };
        proxy.writeQuery({ query: EXPENSES_LIST, data });
      }
    }
  })
)(AppContent);
