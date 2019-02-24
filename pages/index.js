import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Query } from "react-apollo";
import fetch from "node-fetch";
import gql from "graphql-tag";

import GlobalStyle from "../components/global-style";
import AppHeader from "../components/header";

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

const EXPENSES_LIST = gql`
  {
    expenses {
      expenseType
    }
  }
`;

const Index = () => (
  <ApolloProvider client={client}>
    <GlobalStyle />
    <AppHeader />
    <Query query={EXPENSES_LIST}>
      {({ data, loading }) => {
        if (loading || !data) {
          return <div>Loading ...</div>;
        }
        console.log(data);
        return <p>hello</p>;
      }}
    </Query>
  </ApolloProvider>
);

export default Index;
