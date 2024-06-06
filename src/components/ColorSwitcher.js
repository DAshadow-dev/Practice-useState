import React, { useState } from 'react';
import {Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap';

const ColorSwitcher = () => {
  const [selectedColor, setSelectedColor] = useState('light'); 

  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col xs={12} md={6} lg={4}>
          <DropdownButton
            id="dropdown-color-switcher"
            title={`Selected Color: ${selectedColor}`}
            onSelect={handleColorChange}
          >
            {colors.map((color) => (
              <Dropdown.Item key={color} eventKey={color}>
                {color}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <div className={`bg-${selectedColor} p-5 rounded shadow mt-3 text-center`}>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ColorSwitcher;