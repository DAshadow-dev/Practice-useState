import React, { useState } from 'react';
import { Button, Form, ListGroup, Container, Row, Col, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchFilter = () => {
  const [searchInput, setSearchInput] = useState('');
  const [items, setItems] = useState([
    'ReactJS',
    'NodeJS',
    'ExpressJS',
    'MongoDB',
    'MySQL',
    'HTML',
    'AngularJS',
    'VueJS',
  ]);
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light'];

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <h1 className="text-center my-4">Search</h1>
        <Col md="6">
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={handleSearch}
            />
          </InputGroup>
          <ListGroup className="mt-3">
            {filterItems.map((item, index) => (
              <ListGroup.Item
                key={index}
                className={`bg-${colors[index % colors.length]} text-dark fw-bold`}
              >
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchFilter;