import styled from "styled-components";
import { Button, Heading } from "grommet";
import { Add } from "grommet-icons";

import { Row, Column, Container } from "../components/common/layout";

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;
  background: #4ca387;
  padding: 10px 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LeftContent = styled(Content)`
  justify-content: flex-start;
`;

const RightContent = styled(Content)`
  justify-content: flex-end;
`;

const AppHeader = () => (
  <Header>
    <Container>
      <Row>
        <Column xs={3}>
          <LeftContent>
            <Heading color="#fff" level="3">Expenses</Heading>
          </LeftContent>
        </Column>
        <Column xs={9}>
          <RightContent>
            <Button icon={<Add />} label="Add" onClick={() => {}} color="#ffffff" primary  />
          </RightContent>
        </Column>
      </Row>
    </Container>
  </Header>
);

export default AppHeader;
