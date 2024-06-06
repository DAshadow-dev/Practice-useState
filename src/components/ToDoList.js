import React, { useState } from 'react';
import { Button, Container, Row, Col, ListGroup, ListGroupItem,InputGroup,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) { // Check if input is not empty
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const handleDelete = (todoIndex) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);
    setTodos(updatedTodos);
  };

  const handleToggleDone = (todoIndex) => {
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].done = !updatedTodos[todoIndex].done;
    setTodos(updatedTodos);
  };

  return (
    <Container fluid className="p-3">
      <Row>
        <Col md={8}>
          <h1>Todo List</h1>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Add a new todo..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button variant="primary" onClick={addTodo}>
              Add
            </Button>
          </InputGroup>
          <ListGroup>
            {todos.map((todo, index) => (
              <ListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                <span className={`todo-item ${todo.done && 'completed'}`}>
                  {todo.text}
                </span>
                <div className="d-flex gap-2">
                  <Button variant="success" size="sm" onClick={() => handleToggleDone(index)}>
                    {todo.done ? 'Undo' : 'Done'}
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoList;