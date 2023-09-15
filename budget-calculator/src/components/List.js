import React, { useState } from 'react';
import '../styles/List.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function List({ item, handleDeleteBtn, budget, setBudget }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedAmount, setEditedAmount] = useState(item.amount);
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [isAmountClicked, setIsAmountClicked] = useState(false);

  const info = () =>
    toast.info('항목을 편집했습니다.', { position: 'top-right' });
  const error = () =>
    toast.error('항목을 삭제했습니다.', { position: 'top-right' });
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
      <div key={item.id} className='list-container'>
        <ToastContainer />
        <div className='left-section'>
          <input
            className='input-correction'
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
            className='input-correction'
            onChange={(e) => setEditedAmount(e.target.value)}
            value={editedAmount}
            onFocus={() => {
              setIsAmountClicked(true);
            }}
            onBlur={() => setIsAmountClicked(false)}
            placeholder={isAmountClicked === true ? '' : '0'}
            type='number'
          />
        </div>
        <div className='right-section'>
          <button
            onClick={() => {
              handleEditBtn();
              info();
            }}
          >
            ✏️
          </button>
          <button
            onClick={() => {
              handleDeleteBtn(item.id);
              error();
            }}
          >
            ❌
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div key={item.id} className='list-container'>
        <div className='left-section'>
          <div>{item.name}</div>
          <div>{item.amount}원</div>
        </div>
        <div className='right-section'>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button
            onClick={() => {
              handleDeleteBtn(item.id);
              error();
            }}
          >
            ❌
          </button>
        </div>
      </div>
    );
  }
}
