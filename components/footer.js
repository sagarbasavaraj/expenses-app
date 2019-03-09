import React, { PureComponent } from "react";
import { Box, Button } from "grommet";
import { Add } from "grommet-icons";
import styled from "styled-components";

import withShowExpenseForm from "./with-show-expense-form";

const AppFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1;
`;

class Footer extends PureComponent {
  render() {
    const { toggleExpenseForm } = this.props;
    return (
      <AppFooter>
        <Box align="end" pad="medium">
          <Box round="full" overflow="hidden" background="neutral-1">
            <Button icon={<Add />} hoverIndicator onClick={toggleExpenseForm} />
          </Box>
        </Box>
      </AppFooter>
    );
  }
}

export default withShowExpenseForm(Footer);
