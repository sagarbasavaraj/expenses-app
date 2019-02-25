import React from "react";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import fetch from "node-fetch";

import GlobalStyle from "../components/common/global-style";
import AppHeader from "../components/header";
import AppContent from "../components/app-content";

const cache = new InMemoryCache();

const BASE_URL = "http://localhost:4000/graphql";

const httpLink = createHttpLink({
  uri: BASE_URL,
  fetch
});

const client = new ApolloClient({
  link: httpLink,
  cache
});

const Index = () => (
  <Grommet full theme={grommet}>
    <ApolloProvider client={client}>
      <GlobalStyle />
      <AppHeader />
      <AppContent />
    </ApolloProvider>
  </Grommet>
);

export default Index;
