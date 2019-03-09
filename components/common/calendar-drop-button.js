import React, { PureComponent } from "react";
import { DropButton, Calendar, Box, Text } from "grommet";
import { FormDown } from "grommet-icons";

class CalendarDropButton extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = { open: false };

  toogle = () => {
    this.setState({ open: !this.state.open });
  };

  onSelect = date => {
    this.props.onChange({ target: { name: "date", value: date } });
    this.toogle();
  };

  render() {
    const { open } = this.state;
    const { value } = this.props;
    return (
      <DropButton
        open={open}
        onClose={this.toogle}
        onOpen={this.toogle}
        dropContent={<Calendar date={value} onSelect={this.onSelect} />}
      >
        <Box direction="row" gap="medium" align="center" pad="small">
          <Text>
            {value ? new Date(value).toLocaleDateString() : "Select date"}
          </Text>
          <FormDown color="brand" />
        </Box>
      </DropButton>
    );
  }
}

export default CalendarDropButton;
