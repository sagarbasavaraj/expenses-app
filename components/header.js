import styled from "styled-components";

import { Row, Column, Container } from "../components/layout";

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  background: brown;
  padding: 10px;
`;

const AppHeader = () => (
  <Header>
    <Container>
      <Row>
        <Column xs={2}>
          <h1>Expenses</h1>
        </Column>
        <Column xs={10}>
          <h6>Sign in</h6>
        </Column>
      </Row>
    </Container>
  </Header>
);

export default AppHeader;
