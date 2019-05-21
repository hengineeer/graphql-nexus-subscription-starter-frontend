import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import ChatBox from "./ChatBox";

const CREATE_POST = gql`
  mutation CreatePost($author: String!, $content: String!) {
    createPost(author: $author, content: $content) {
      id
      author
      content
    }
  }
`;

export default class AppContents extends React.Component {
  state = {
    author: "",
    postcontent: ""
  };

  handleSubmit(state) {
    console.log("HI!", state);
  }

  render() {
    return (
      <Mutation mutation={CREATE_POST}>
        {(createPost, { loading, error }) => (
          <div className="App">
            <header className="App-header">
              <h1>GraphQL Nexus Subscriptions</h1>
              <form style={{ width: "80%" }}>
                <InputGroup
                  style={{
                    marginBottom: "50px",
                    marginTop: "50px",
                    width: "50%"
                  }}
                >
                  <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                  <Input
                    placeholder="Username"
                    value={this.state.author}
                    onChange={event =>
                      this.setState({ author: event.target.value })
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
                      createPost({
                        variables: {
                          author: this.state.author,
                          content: this.state.postcontent
                        }
                      });
                      this.setState({ postcontent: "" });
                    }}
                  >
                    Submit
                  </Button>
                </InputGroup>
              </form>
            </header>
          </div>
        )}
      </Mutation>
    );
  }
}
