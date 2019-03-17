import React, { PureComponent } from "react";
import { ApolloProvider } from "react-apollo";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Head from "next/head";

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
      <React.Fragment>
        <Head>
          <title>My Expenses</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <Grommet full theme={grommet}>
          <ApolloProvider client={this.state.client}>
            <GlobalStyle />
            <AppContent />
          </ApolloProvider>
        </Grommet>
      </React.Fragment>
    );
  }
}

export default InitApp;
