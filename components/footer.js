import React, { PureComponent } from "react";
import { Box, Button } from "grommet";
import { Add } from "grommet-icons";
import styled from "styled-components";

const AppFooter = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 3;
`;

class Footer extends PureComponent {
  state = {
    showExpenseForm: false
  };

  addButtonClickHandler = () => {
    this.setState({ showExpenseForm: true });
  };

  closeForm = () => {
    this.setState({ showExpenseForm: false });
  };

  render() {
      const {showExpenseForm} = this.state;
    return (
      <AppFooter>
        <Box align="end" pad="medium">
          <Box round="full" overflow="hidden" background="neutral-1">
            <Button
              icon={<Add />}
              hoverIndicator
              onClick={this.addButtonClickHandler}
            />
          </Box>
        </Box>
        {this.props.children(showExpenseForm, this.closeForm)}
      </AppFooter>
    );
  }
}

export default Footer;
