import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card, CardText, CardBody, Alert } from "reactstrap";

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

//Subscribe to new Posts
const NEW_POST_SUBSCRIPTION = gql`
  subscription PostSubscription {
    post {
      node {
        content
        id
        author
      }
    }
  }
`;

export default class ChatBox extends React.Component {
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
                          id={post.id}
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
