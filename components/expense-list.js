import React from "react";
import styled from "styled-components";
import { Heading } from "grommet";
import { map } from "lodash";

const ExpenseListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  padding: 0 30px;

  @media only screen and (min-width: 48em) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (min-width: 64em) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (min-width: 75em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ExpenseItem = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid grey;
  box-shadow: 0 10px 6px -6px #777;
`;

const ExpenseList = ({ expenses }) => {
  return (
    <ExpenseListContainer>
      {map(expenses, expense => {
        return (
          <ExpenseItem>
            <Heading level="3">{expense.expenseType}</Heading>
            <Heading level="5">{expense.description}</Heading>
          </ExpenseItem>
        );
      })}
    </ExpenseListContainer>
  );
};

export default ExpenseList;
