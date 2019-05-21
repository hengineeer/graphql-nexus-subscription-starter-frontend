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

//Connect backend to frontend
const client = new ApolloClient({
  uri: "http://localhost:4000"
});

//Query for existing posts
const GET_EXISTING_POSTS = gql`
  query PostQuery {
    posts {
      id
      author
      content
    }
  }
`;

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
              <Query query={GET_EXISTING_POSTS}>
                {({ loading, error, data }) => {
                  if (loading) return "Loading...";
                  if (error) return `Error! ${error.message}`;
                  return (
                    <div>
                      {data.posts.map(post => (
                        <Alert
                          color="secondary"
                          style={{ fontSize: "15px", width: "100%" }}
                        >
                          <b>{post.author}: </b>
                          {post.content}
                        </Alert>
                      ))}
                    </div>
                  );
                }}
              </Query>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

class AppContents extends React.Component {
  state = {
    username: "",
    postcontent: ""
  };

  handleSubmit(state) {
    console.log("HI!", state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GraphQL Nexus Subscriptions</h1>
          <form style={{ width: "80%" }}>
            <InputGroup
              style={{ marginBottom: "50px", marginTop: "50px", width: "50%" }}
            >
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input
                placeholder="Username"
                value={this.state.username}
                onChange={event =>
                  this.setState({ username: event.target.value })
                }
              />
            </InputGroup>
            <ChatBox />

            <InputGroup style={{ marginTop: "50px", width: "95%" }}>
              <InputGroupAddon addonType="prepend">✎</InputGroupAddon>
              <Input
                placeholder="Your Message Here"
                value={this.state.postcontent}
                onChange={event =>
                  this.setState({ postcontent: event.target.value })
                }
              />
              <Button
                outline
                color="secondary"
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  this.handleSubmit(this.state);
                  this.setState({ postcontent: "" });
                }}
              >
                Submit
              </Button>
            </InputGroup>
          </form>
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
