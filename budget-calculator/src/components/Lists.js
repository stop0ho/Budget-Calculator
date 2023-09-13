import React from 'react';

export default function Lists({ budget, handleDeleteBtn }) {
  return budget.map((item) => (
    <div key={item.id}>
      <span>{item.name} </span>
      <span>{item.amount}</span>
      <button>✏️</button>
      <button onClick={() => handleDeleteBtn(item.id)}>❌</button>
    </div>
  ));
}
