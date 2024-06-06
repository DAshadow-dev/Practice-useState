import React, { useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const DragAndDropList = ({ items, onReorder }) => {
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggingItem(index);
    e.dataTransfer.setData('text/plain', index); 
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e, targetIndex) => {
    e.preventDefault(); 
    if (draggingItem !== null && draggingItem !== targetIndex) {
      const newItems = [...items]; 
      const [removed] = newItems.splice(draggingItem, 1);
      newItems.splice(targetIndex, 0, removed); 
      setDraggingItem(null);
      onReorder(newItems); 
    }
  };

  return (
    <ListGroup>
      {items.map((item, index) => (
        <ListGroupItem
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, index)}
          className={draggingItem === index ? 'dragging list-group-item-primary' : ''} 
        >
          {item}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default DragAndDropList;