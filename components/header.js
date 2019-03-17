import styled from "styled-components";
import { Heading, Anchor } from "grommet";

import { Row, Column, Container } from "../components/common/layout";

const Header = styled.header`
  position: fixed;
  width: 100%;
  background: #24292e;
  padding: 10px 30px;
  z-index: 3;
  box-shadow: 0px 10px 7px -7px #777;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const RightContainer = styled.div`
  justify-self: end;
`

const AppHeader = () => (
  <Header>
    <Container>
      <Content>
        <Heading color="#fff" level="3">
          My Expenses
        </Heading>
        <RightContainer>
          <Anchor margin="small" color="#fff" href="#" primary label="Sign in" />
          <Anchor margin="small" color="#fff" href="#" primary label="Sign up" />
        </RightContainer>
      </Content>
    </Container>
  </Header>
);

export default AppHeader;
