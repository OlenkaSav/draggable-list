import React, { Component, useState, useEffect } from 'react';
import CategoryList from './../CategoryList/CategoryList'
import './CategoryItem.css'

type Item = {
    text: string
    subs: Item[]
}

const CategoryItem = ({ item, onDelete, onEdit, index, onSave}: any) => {
  const [isEditing, setIsEditing] = useState(true);
  const [editedItem, setEditedItem] = useState(item);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
      console.log("here it is"); 
      onEdit(editedItem, index);
    // onSave(editedItem, index);
    setIsEditing(false);
  };
    
    const handleChange = (event: any) => {
        setEditedItem({ ...editedItem, text: event.target.value })
    };

    
    const handleAdd = () => {
        console.log(editedItem);
        setEditedItem((prevItem: Item) => ({
    ...prevItem,
    subs: [...prevItem.subs, { text: 'vvv', subs: [] }],
  }));
        // setEditedItem({
        //     ...editedItem,
        //     subs: [...editedItem.subs, { text: 'vvv', subs: [] }],
        // });
        // handleSave();
   
    };

    React.useEffect(() => {
        console.log(editedItem);
    //   onSave(editedItem);
    }, [editedItem])

    return (
      <li className="list-container">
         {isEditing ? (
            <div className="list-item">
               <input
                type="text"
                name="text"
                placeholder='Category'
                value={editedItem.text}
                onChange={handleChange}
                  />
                <button className="item-button delete"
                       onClick={() => onDelete(index)}>
                  &#10006;
                </button>
                <button className="item-button save"
                        onClick={handleSave}
                    // onClick={() => onEdit(editedItem, index)}
                    >
                &#10004;
                </button>                       
            </div>
      ) : (
            <div className="list-item">
                <p className="item-text">{editedItem.text}</p> 
                <button className="item-button add"
                        onClick={handleAdd}>
                &#10133;
                
                </button>          
                <button className="item-button delete"
                            onClick={() => onDelete(index)}>
                &#10006;
                </button>
                <button className="item-button edit"
                            onClick={handleEdit}>
                &#128393;
                </button> 
            </div>
 
        )}
        {editedItem.subs && editedItem.subs.length > 0  &&
        <CategoryList
            items={editedItem.subs}
            onEdit={(updatedItems: any) => setEditedItem(updatedItems)}
            // onSave={(updatedItems: any) => setEditedItem(updatedItems)}
            // onDelete={(index: number) => setSubs(subs.filter((_: any, i: number) => i !== index))}
        />
        }
      </li>
  );
};

export default CategoryItem;