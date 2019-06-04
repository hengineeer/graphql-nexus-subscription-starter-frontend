import React from "react";
import "./App.css";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import AppContents from "./Components/AppContents";
import { WebSocketLink } from "apollo-link-ws";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true
  }
});

const httpLink = createHttpLink({
  uri: "http://localhost:4000/"
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

function App() {
  console.log(client);
  return (
    <ApolloProvider client={client}>
      <AppContents />
    </ApolloProvider>
  );
}

export default App;
