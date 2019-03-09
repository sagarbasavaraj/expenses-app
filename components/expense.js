import React, { PureComponent } from "react";
import { Layer, Box, Form, FormField, Button, TextArea, Text } from "grommet";
import { FormClose } from "grommet-icons";
import { Query, Mutation } from "react-apollo";
import moment from "moment";

import CalendarDropButton from "./common/calendar-drop-button";
import {
  EXPENSES_LIST,
  ADD_EXPENSE,
  FIND_EXPENSE,
  UPDATE_EXPENSE
} from "./expense.queries";

const ExpenseFormContainer = ({ expenseId, children }) => {
  if (expenseId) {
    return (
      <Query query={FIND_EXPENSE} variables={{ id: expenseId }}>
        {({ data, loading, error }) => {
          if (loading || !data) {
            return <div>Fetching expense ...</div>;
          }
          if (error) {
            return <div>Error in fetching expense ...</div>;
          }
          return children({
            data: data.expense,
            mutationType: UPDATE_EXPENSE,
            variables: { id: expenseId }
          });
        }}
      </Query>
    );
  }
  return children({ mutationType: ADD_EXPENSE });
};

const query = [{ query: EXPENSES_LIST }];

class ExpenseForm extends PureComponent {
  constructor(props) {
    super(props);
    const { data = {} } = props;
    this.state = {
      expenseType: data.expenseType || '',
      amount: data.amount || '',
      date: data.date || '',
      paidBy: data.paidBy || '',
      description: data.description || ''
    };
  }

  onInputChange = ({ target }) => {
    let value = target.value;

    if (target.name === "amount") {
      value = +value;
    }

    this.setState({ [target.name]: value });
  };

  render() {
    const { mutationType, variables = {}, closeForm } = this.props;
    const { expenseType, amount, date, paidBy, description } = this.state;
    return (
      <Mutation
        mutation={mutationType}
        variables={variables}
        refetchQueries={query}
        onCompleted={closeForm}
      >
        {(saveExpense, { loading, error }) => (
          <React.Fragment>
            {loading && <div>Saving data...</div>}
            {error && <div>error in saving data...</div>}
            <Box flex overflow="auto" pad="xsmall">
              <Form>
                <FormField
                  label="Expense type"
                  name="expenseType"
                  required
                  value={expenseType}
                  onChange={this.onInputChange}
                />
                <FormField
                  label="Amount"
                  htmlFor="amount"
                  name="amount"
                  required
                  value={amount}
                  onChange={this.onInputChange}
                />
                <FormField
                  name="date"
                  component={CalendarDropButton}
                  label="Date"
                  value={date}
                  onChange={this.onInputChange}
                />
                <FormField
                  name="paidBy"
                  label="Paid by"
                  value={paidBy}
                  onChange={this.onInputChange}
                />
                <FormField
                  label="Description"
                  name="description"
                  component={TextArea}
                  value={description}
                  onChange={this.onInputChange}
                />
              </Form>
            </Box>
            <Box
              as="footer"
              border={{ side: "top" }}
              pad="small"
              justify="end"
              direction="row"
              align="center"
            >
              <Button
                label="Save"
                primary
                onClick={() => {
                  saveExpense({
                    variables: {
                      expenseType,
                      amount,
                      date: moment(date).valueOf(),
                      paidBy,
                      description
                    }
                  });
                }}
              />
            </Box>
          </React.Fragment>
        )}
      </Mutation>
    );
  }
}

class Expense extends PureComponent {
  render() {
    const { closeForm, expenseId } = this.props;

    const title = expenseId ? "Edit Expense" : "Add Expense";
    return (
      <Layer margin="large">
        <Box fill align="center" justify="center">
          <Box width="medium">
            <Box
              direction="row"
              align="center"
              as="header"
              elevation="small"
              justify="between"
            >
              <Text margin={{ left: "small" }}>{title}</Text>
              <Button icon={<FormClose />} onClick={closeForm} />
            </Box>
            <ExpenseFormContainer expenseId={expenseId}>
              {({ data = {}, mutationType, variables = {} }) => (
                <ExpenseForm
                  data={data}
                  mutationType={mutationType}
                  variables={variables}
                  closeForm={closeForm}
                />
              )}
            </ExpenseFormContainer>
          </Box>
        </Box>
      </Layer>
    );
  }
}

export default Expense;
