import React, { PureComponent } from "react";
import Expense from "./expense";

const withShowExpenseForm = Component =>
  class extends PureComponent {
    constructor(props) {
      super(props);
    }
    state = {
      showExpenseForm: false
    };

    toggleExpenseForm = () => {
      this.setState({ showExpenseForm: !this.state.showExpenseForm });
    };

    render() {
      const { showExpenseForm } = this.state;
      const { expenseId, ...restProps } = this.props;
      return (
        <React.Fragment>
          <Component
            toggleExpenseForm={this.toggleExpenseForm}
            {...restProps}
          />
          {showExpenseForm && (
            <Expense closeForm={this.toggleExpenseForm} expenseId={expenseId} />
          )}
        </React.Fragment>
      );
    }
  };

export default withShowExpenseForm;
