import React from 'react';

export default function Lists({ budget, handleDeleteBtn, setBudget }) {
  return (
    <div>
      {budget.map((item) => (
        <div key={item.id}>
          <span>{item.name} </span>
          <span>{item.amount}</span>
          <button>✏️</button>
          <button onClick={() => handleDeleteBtn(item.id)}>❌</button>
        </div>
      ))}
      <div>
        <button onClick={() => setBudget([])}>목록 지우기</button>
      </div>
    </div>
  );
}
