import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import { Text, Button, Box } from "grommet";
import { Trash, Edit } from "grommet-icons";
import { map } from "lodash";
import moment from "moment";

import { getExpenseId } from "./helpers/expense-helpers";
import withShowExpenseForm from "./with-show-expense-form";

const ExpenseListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  padding: 0 30px 30px 30px;
  grid-gap: 1rem;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 1200) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ExpenseItem = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  box-shadow: 0 10px 6px -6px #777;
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  padding: 5px 10px;

  > span:nth-child(2) {
    justify-self: end;
  }

  > span:nth-child(3) {
    grid-column: 1/3;
    padding-right: 30px;
  }

  > span:nth-child(4) {
    grid-column: 1/3;
    font-style: oblique;
  }
`;

const ItemFooterButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;

  > div:nth-child(2) {
    grid-column: 2/4;
  }
`;

const EditExpense = withShowExpenseForm(({ children, toggleExpenseForm }) => (
  <Fragment>{children(toggleExpenseForm)}</Fragment>
));

class ExpenseList extends PureComponent {
  state = {
    expenseId: null
  };
  deleteExpenseHandler = ({ target }) => {
    const id = getExpenseId(target);

    if (id) {
      this.props.deleteExpense({ variables: { id } });
    }
  };

  editExpenseHandler = ({ target }) => {
    const expenseId = getExpenseId(target);
    this.setState({ expenseId });
  };

  render() {
    const { expenses } = this.props;
    const { expenseId } = this.state;

    return (
      <ExpenseListContainer>
        <EditExpense expenseId={expenseId}>
          {toggleExpenseForm => {
            return map(expenses, expense => (
              <ExpenseItem key={expense.id}>
                <Data>
                  <Text size="large" truncate>
                    {expense.expenseType}
                  </Text>
                  <Text size="large">
                    {Number(expense.amount).toLocaleString()}
                  </Text>
                  <Text size="small" truncate>
                    {expense.description}
                  </Text>
                  <Text size="small">{`Paid by: ${expense.paidBy}`}</Text>
                </Data>
                <ItemFooterButton>
                  <Box align="start">
                    <Box round="full" overflow="hidden">
                      <Button
                        data-id={expense.id}
                        icon={<Edit color="#097bed" />}
                        hoverIndicator
                        onClick={e => {
                          this.editExpenseHandler(e);
                          toggleExpenseForm();
                        }}
                      />
                    </Box>
                  </Box>
                  <Box align="center">
                    <Text size="xsmall">
                      {moment(expense.date).format("MMM DD YYYY HH:mm")}
                    </Text>
                  </Box>
                  <Box align="end">
                    <Box round="full" overflow="hidden">
                      <Button
                        data-id={expense.id}
                        icon={<Trash color="#e50615" />}
                        hoverIndicator
                        onClick={this.deleteExpenseHandler}
                      />
                    </Box>
                  </Box>
                </ItemFooterButton>
              </ExpenseItem>
            ));
          }}
        </EditExpense>
      </ExpenseListContainer>
    );
  }
}

export default ExpenseList;
