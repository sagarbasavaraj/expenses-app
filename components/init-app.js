import React, { PureComponent } from "react";
import { ApolloProvider } from "react-apollo";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";

import GlobalStyle from "../components/common/global-style";
import AppContent from "../components/app-content";
import InitConfig from "../components/init-config";

class InitApp extends PureComponent {
  state = {
    client: null
  };

  onConfigComplete = client => {
    this.setState({ client });
  };

  getClient = () => <InitConfig onConfigComplete={this.onConfigComplete} />;

  render() {
    if (!this.state.client) {
      return this.getClient();
    }
    return (
      <Grommet full theme={grommet}>
        <ApolloProvider client={this.state.client}>
          <GlobalStyle />
          <AppContent />
        </ApolloProvider>
      </Grommet>
    );
  }
}

export default InitApp;
