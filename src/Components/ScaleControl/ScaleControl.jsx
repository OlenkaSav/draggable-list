import React, { useState } from 'react';
import './ScaleControl.css'
const ZOOM = [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.25, 1.5]

const ScaleControl = ({ scale, setScale }) => {
  const [isOpen, setIsOpen] = useState(false);
    
  const handleZoomIn = () => {
     if (scale < 1.5) {
        setScale(ZOOM[ZOOM.indexOf(scale)+1]);
    }
  };

  const handleZoomOut = () => {
    if (scale > 0.25) {
        setScale(ZOOM[ZOOM.indexOf(scale)-1]);
    }
  };
    
     const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Обработчик выбора элемента
  const handleSelectItem = (item) => {
    setScale(item);
    setIsOpen(false); // Закрываем список после выбора
  };

  return (
    <div className="scale-control">
      <button onClick={handleZoomOut} className="scale-button">	&#8722;</button>
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                {`${scale*100} %`}
            </button>
        {isOpen && (
            <ul className="dropdown-field">
            {ZOOM.map((item, index) => (
                <li key={index} onClick={() => handleSelectItem(item)}>
                {`${item*100} %`}
                </li>
            ))}
            </ul>
        )}
      
        </div>
      <button onClick={handleZoomIn} className="scale-button">&#43;</button>
      
    </div>
  );
};

export default ScaleControl;
