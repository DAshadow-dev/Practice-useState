import React, { useState } from 'react';
import DragAndDropList from './DragAndDropList';
const List = () => {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  
    const handleReorder = (reorderedItems) => {
      setItems(reorderedItems);
    };
  
    return (
      <div>
        <DragAndDropList items={items} onReorder={handleReorder} />
      </div>
    );
  };
  export default List