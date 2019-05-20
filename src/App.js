import React from "react";
import "./App.css";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Card,
  CardText,
  CardBody,
  Alert
} from "reactstrap";

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

function App() {
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
        </InputGroup>
      </header>
    </div>
  );
}

export default App;
