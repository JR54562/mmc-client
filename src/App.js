import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert, Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert>This is a button</Alert>
        <Button>Test Button</Button>
      </header>

      <Container>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

    </div>
    
  );
}

export default App;
