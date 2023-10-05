import React, { Component, useState } from 'react';
import CategoryItem from './../CategoryItem/CategoryItem';
import './CategoryList.css'

type Item = {
    text: string
    subs: Item[]
}

const CategoryList = ({ items, onDelete, onEdit }: any) => {
//   const [newItem, setNewItem] = useState('');

//   const handleInputChange = (e: any) => {
//     setNewItem(e.target.value);
//   };

//   const handleAddItem = () => {
//     if (newItem.trim() !== '') {
//       onEdit([...items, { text: newItem, subs: [] }]);
//       setNewItem('');
//     }
//     };
    
  const handleSave = (newItem: Item, index: number) => {
   onEdit(items.map((item: Item, i: number) => (i === index ? { ...newItem } : item)))
  };

  return (
    <div>
      <ul className="item-list">
        {items.map((item: Item, index: number) => (
          <CategoryItem
            key={index}
            item={item}
            onDelete={() => onDelete(index)}
                // onEdit={onEdit}
                // onSave={handleSave}
            onEdit={(updatedItem: any) => {
                const updatedItems = [...items]; // Создайте копию массива items
                updatedItems[index] = updatedItem; // Обновите элемент в копии
                onEdit(updatedItems); // Вызовите колбэк с обновленными данными
            }}
            onSave={(updatedItem: any) => {
                const updatedItems = [...items];
                updatedItems[index] = updatedItem;
                onEdit(updatedItems);
            }}

                // onSave={(updatedItem: any)=>handleSave(updatedItem, index)}
                // onEdit={(updatedItems: any) => onEdit(updatedItems)}
            // onEdit={(items: any) => onEdit(items.map((item: Item, i: number) => (i === index ? { ...item, text: editedText } : item)))}
          />
        ))}
          </ul>
       
    </div>
  );
};

export default CategoryList;