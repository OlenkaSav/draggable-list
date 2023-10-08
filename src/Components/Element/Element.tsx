import React, { useState } from 'react';
import './Element.css'

type Item = {
    isEditing: boolean,  
    text: string,
    children: Item[]
}
type ElementProps = {
    element: Item;
    onDelete: () => void;
};

function Element({ element, onDelete} :ElementProps) {
    const [editedText, setEditedText] = useState(element.text);
    const [key, setKey] = useState(0);

  const handleEdit = () => {
    element.isEditing = true;
    setKey(key + 1);
  };

  const handleSave = () => {
    element.isEditing = false;
    element.text = editedText;
    setKey(key + 1);
  };

  const handleDelete = () => {
    onDelete(); 
    setKey(key + 1);   
  };

  const handleAddChild = () => {
    element.children.push({ text: '', isEditing: true, children: [] });
    setKey(key + 1);    
  };
    
  const deleteElement = (indexToDelete: number) => {
    const updatedElements = [...element.children];
    updatedElements.splice(indexToDelete, 1);
    element.children = [...updatedElements];
    setKey(key + 1);
    
  };

    return (
     <li className="list-container">
         {element.isEditing ? (
            <div className="list-item">
               <input
                type="text"
                name="text"
                placeholder='Category'
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                  />
                <button className="item-button delete"
                       onClick={handleDelete}>
                  &#10006;
                </button>
                <button className="item-button save"
                        onClick={handleSave}>
                &#10004;
                </button>                       
            </div>
      ) : (
            <div className="list-item">
                <p className="item-text">{element.text}</p> 
                <button className="item-button add"
                        onClick={handleAddChild}>
                &#10133;
                
                </button>          
                <button className="item-button delete"
                            onClick={handleDelete}>
                &#10006;
                </button>
                <button className="item-button edit"
                            onClick={handleEdit}>
                &#128393;
                </button> 
            </div>
 
            )}
        <ul className='item-list'>
        {element.children.map((childElement, index) => (
            <Element
                key={index}
                element={childElement}
                onDelete={() => deleteElement(index)}
            />
        ))}
       </ul>
      </li>
   
  );
}

export default Element;