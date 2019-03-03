import React, { PureComponent } from "react";
import {DropButton, Calendar, Box, Text} from "grommet";
import {FormDown} from "grommet-icons";

class CalendarDropButton extends PureComponent {
  state = { date: undefined, open: false };

  toogle = () => {
    this.setState({ open: !this.state.open });
  };

  onSelect = date => this.setState({ date, open: false });

  render() {
    const { date, open } = this.state;
    return (
      <DropButton
        open={open}
        onClose={this.toogle}
        onOpen={this.toogle}
        dropContent={<Calendar date={date} onSelect={this.onSelect} />}
      >
        <Box direction="row" gap="medium" align="center" pad="small">
          <Text>
            {date ? new Date(date).toLocaleDateString() : "Select date"}
          </Text>
          <FormDown color="brand" />
        </Box>
      </DropButton>
    );
  }
}

export default CalendarDropButton;
