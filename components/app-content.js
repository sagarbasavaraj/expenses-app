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
`;

const getExpenseId = target => {
  let node = target;

  while (node.type !== "button") {
    node = node.parentNode;
  }

  if (node) {
    const id = node.getAttribute("data-id");
    return id;
  }

  return null;
};

class AppContent extends Component {
  constructor(props) {
    super(props);
  }

  deleteExpense = ({ target }) => {
    const id = getExpenseId(target);

    if (id) {
      this.props.deleteExpense({ variables: { id } });
    }
  };

  editExpense = ({ target }) => {
    const id = getExpenseId(target);
    console.log(id);
  };

  render() {
    return (
      <React.Fragment>
        <AppHeader />
        <Query query={EXPENSES_LIST}>
          {({ data, loading }) => {
            if (loading || !data) {
              return <div>Loading ...</div>;
            }
            return (
              <Content>
                <ExpenseList
                  expenses={data.expenses}
                  deleteExpenseHandler={this.deleteExpense}
                  editExpenseHandler={this.editExpense}
                />
              </Content>
            );
          }}
        </Query>
        <AppFooter>
          {(showExpenseForm, closeForm) =>
            showExpenseForm && <Expense closeForm={closeForm} />
          }
        </AppFooter>
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
