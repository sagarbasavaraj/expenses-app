import React from "react";
import styled from "styled-components";
import { Text, Button, Box } from "grommet";
import { Trash, Edit } from "grommet-icons";
import { map } from "lodash";
import moment from "moment";

const ExpenseListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  padding: 0 30px;
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

  @media only screen and (min-width: 1200px) {
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
    grid-column: 1/2;
  }

  > span:nth-child(4) {
    justify-self: end;
  }

  > span:nth-child(5) {
    grid-column: 1/3;
    font-style: oblique;
  }
`;

const ItemFooterButton = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const deleteHandler = ({target}) => {
  console.log(target);
};

const ExpenseList = ({ expenses }) => {
  return (
    <ExpenseListContainer>
      {map(expenses, expense => {
        return (
          <ExpenseItem key={expense.id}>
            <Data>
              <Text size="large" truncate>
                {expense.expenseType}
              </Text>
              <Text size="medium">
                {Number(expense.amount).toLocaleString()}
              </Text>
              <Text size="small" truncate>
                {expense.description}
              </Text>
              <Text size="small">
                {moment(+expense.date).format("MMM DD YYYY")}
              </Text>
              <Text size="small">{`Paid by: ${expense.paidBy}`}</Text>
            </Data>
            <ItemFooterButton>
              <Box align="start">
                <Box round="full" overflow="hidden">
                  <Button
                    icon={<Edit color="#097bed" />}
                    hoverIndicator
                    onClick={deleteHandler}
                  />
                </Box>
              </Box>
              <Box align="end">
                <Box round="full" overflow="hidden">
                  <Button
                    color="red"
                    icon={<Trash color="#e50615" />}
                    hoverIndicator
                    onClick={() => {}}
                  />
                </Box>
              </Box>
            </ItemFooterButton>
          </ExpenseItem>
        );
      })}
    </ExpenseListContainer>
  );
};

export default ExpenseList;
