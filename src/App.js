import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./App.css";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Card,
  CardText,
  CardBody,
  Alert,
  Button
} from "reactstrap";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});

class ChatBox extends React.Component {
  render() {
    return (
      <div style={{ width: "95%" }}>
        <Card>
          <CardBody
            style={{
              backgroundColor: "#333",
              padding: "50px"
            }}
          >
            <CardText>
              <Alert
                color="secondary"
                style={{ fontSize: "15px", width: "100%" }}
              >
                <b>NAME: </b>
                Content content
              </Alert>
              <Alert
                color="secondary"
                style={{ fontSize: "15px", width: "100%" }}
              >
                <b>NAME: </b>
                Content content
              </Alert>
              <Alert
                color="secondary"
                style={{ fontSize: "15px", width: "100%" }}
              >
                <b>NAME: </b>
                Content content
              </Alert>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

class AppContents extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GraphQL Nexus Subscriptions</h1>
          <InputGroup style={{ margin: "50px", width: "50%" }}>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input placeholder="Username" />
          </InputGroup>
          <ChatBox />
          <InputGroup style={{ margin: "50px", width: "75%" }}>
            <InputGroupAddon addonType="prepend">✎</InputGroupAddon>
            <Input placeholder="Your Message Here" />
            <Button outline color="secondary" style={{ marginLeft: "10px" }}>
              Submit
            </Button>
          </InputGroup>
        </header>
      </div>
    );
  }
}

function App() {
  return (
    <ApolloProvider client={client}>
      <AppContents />
    </ApolloProvider>
  );
}

export default App;
