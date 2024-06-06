import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useState } from "react";

const Increment = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col className="text-center p-5 bg-light shadow">
          <Button variant="primary" size="lg" className="rounded-pill mb-3" onClick={increment}>
            Increment
          </Button>
          <h1 className="text-success fs-1 fw-bold">Count: {count}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Increment;