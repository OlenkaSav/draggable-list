import React, { useState } from 'react';
import Element from '../Element/Element';
import './Field.css';


const Field = ({ position, setPosition, scale }: any) => {
  
  const [elements, setElements] = useState<{ text: string; isEditing: boolean; children: []; }[]>([]);
  const [isDragging, setIsDragging] = useState(true);

  const addElement = () => {
    setElements([...elements, { text: '', isEditing: true, children: [] }]);
  };

  const deleteElement = (indexToDelete: number) => {
    const updatedElements = [...elements];
    updatedElements.splice(indexToDelete, 1);
    setElements(updatedElements);
  };

  const handleMouseOver = (e: any) => {
       if (e.target.tagName === 'INPUT') {
          setIsDragging(false)
        } else {
         setIsDragging(true)
        }
      }
   
  const handleDragStart = (e: any) => {
      if (isDragging) {
      e.preventDefault(); 
        
        const startX = e.clientX - position.x;
        const startY = e.clientY - position.y;

        const handleMouseMove = (e: any) => {
          const newX = e.clientX - startX;
          const newY = e.clientY - startY;
          setPosition({ x: newX, y: newY });
        };

        const handleMouseUp = () => {
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
      }
    };

  return (
    <div
        className="draggable"
        style={{transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`}}
        draggable={isDragging}
        onMouseDown = { handleDragStart }
        onMouseOver={handleMouseOver}
    >
        <div className="categories">
            <p className="categories-label">Categories</p>
        <button className="categories-button"
          onClick={addElement}>
          &#10133;
        </button>
      </div>
      <ul className="item-list">
        {elements.map((element, index) => (
          <Element
            key={index}
            element={element}
            onDelete={() => deleteElement(index)}
          />
        ))}
      </ul>          
    </div>
  );
}

export default Field;

