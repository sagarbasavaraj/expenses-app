import React, { PureComponent } from "react";
import fetch from "node-fetch";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

class InitConfig extends PureComponent {
  componentDidMount() {
    const cache = new InMemoryCache();

    const BASE_URL = `${window.location.origin}/graphql`;

    const httpLink = createHttpLink({
      uri: BASE_URL,
      fetch
    });

    const client = new ApolloClient({
      link: httpLink,
      cache
    });
    this.props.onConfigComplete(client);
  }

  render() {
    return <div>Loading...</div>;
  }
}

export default InitConfig;
