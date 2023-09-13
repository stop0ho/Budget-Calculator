import React, { useState } from 'react';

export default function List({ item, handleDeleteBtn, budget, setBudget }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedAmount, setEditedAmount] = useState(item.amount);
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [isAmountClicked, setIsAmountClicked] = useState(false);

  const handleEditBtn = (e) => {
    let newBudget = budget.map((data) => {
      if (item.id === data.id) {
        data.name = editedName;
        data.amount = editedAmount;
      }
      return data;
    });
    setBudget(newBudget);
    setEditedName(item.name);
    setEditedAmount(item.amount);
    setIsEditing(false);
  };

  if (isEditing === true) {
    return (
      <div key={item.id}>
        <input
          type='text'
          onChange={(e) => setEditedName(e.target.value)}
          value={editedName}
          onFocus={() => {
            setIsNameClicked(true);
          }}
          onBlur={() => setIsNameClicked(false)}
          placeholder={isNameClicked === true ? '' : '예) 렌트비'}
          required
        />
        <input
          onChange={(e) => setEditedAmount(e.target.value)}
          value={editedAmount}
          onFocus={() => {
            setIsAmountClicked(true);
          }}
          onBlur={() => setIsAmountClicked(false)}
          placeholder={isAmountClicked === true ? '' : '0'}
          type='number'
        />
        <button onClick={handleEditBtn}>✏️</button>
        <button onClick={() => handleDeleteBtn(item.id)}>❌</button>
      </div>
    );
  } else {
    return (
      <div key={item.id}>
        <span>{item.name} </span>
        <span>{item.amount}</span>
        <button onClick={() => setIsEditing(true)}>✏️</button>
        <button onClick={() => handleDeleteBtn(item.id)}>❌</button>
      </div>
    );
  }
}
