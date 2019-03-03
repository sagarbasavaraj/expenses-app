import React, { PureComponent } from "react";
import {
  Layer,
  Box,
  Form,
  FormField,
  Button,
  TextArea,
  Text,
  TextInput
} from "grommet";
import { FormClose } from "grommet-icons";
import CalendarDropButton from "./common/calendar-drop-button";

class Expense extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { closeForm } = this.props;
    return (
      <Layer margin="large">
        <Box fill align="center" justify="center">
          <Box width="medium">
            <Box
              direction="row"
              align="center"
              as="header"
              elevation="small"
              justify="between"
            >
              <Text margin={{ left: "small" }}>Add Expense</Text>
              <Button icon={<FormClose />} onClick={closeForm} />
            </Box>
            <Box flex overflow="auto" pad="xsmall">
              <Form onSubmit={({ value }) => console.log("Submit", value)}>
                <FormField label="Expense type" name="expenseType" required />
                <FormField
                  label="Amount"
                  htmlFor="amount"
                  name="amount"
                  required
                >
                  <TextInput id="text-input" />
                </FormField>
                <FormField
                  name="date"
                  component={CalendarDropButton}
                  label="Date"
                />
                <FormField name="paidBy" label="Paid by" />
                <FormField
                  label="Description"
                  name="description"
                  component={TextArea}
                />
              </Form>
            </Box>
            <Box
              as="footer"
              border={{ side: "top" }}
              pad="small"
              justify="end"
              direction="row"
              align="center"
            >
              <Button type="submit" label="Save" primary />
            </Box>
          </Box>
        </Box>
      </Layer>
    );
  }
}

export default Expense;
