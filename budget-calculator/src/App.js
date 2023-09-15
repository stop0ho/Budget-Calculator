import { useState, useEffect } from 'react';
import './styles/App.css';

import Form from './components/Form.js';
import Lists from './components/Lists';
import Sum from './components/Sum';

function App() {
  const initialData = localStorage.getItem('budget')
    ? JSON.parse(localStorage.getItem('budget'))
    : [];

  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [budget, setBudget] = useState(initialData);

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);
  const handleOnclick = (e) => {
    const newItem = {
      id: Date.now(),
      name: name !== '' ? name : '이름 없음',
      amount: amount,
    };
    setBudget((prev) => [...prev, newItem]);
    setName('');
    setAmount(0);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleDeleteBtn = (id) => {
    let newBudget = budget.filter((data) => data.id !== id);
    setBudget(newBudget);
    localStorage.setItem('budget', JSON.stringify(budget));
  };

  return (
    <div className='main-container'>
      <h1>예산 계산기</h1>
      <div className='sub-container'>
        <Form
          name={name}
          amount={amount}
          handleName={handleName}
          handleAmount={handleAmount}
          handleOnclick={handleOnclick}
        />
        <Lists
          budget={budget}
          handleDeleteBtn={handleDeleteBtn}
          setBudget={setBudget}
        />
      </div>
      <Sum budget={budget} />
    </div>
  );
}

export default App;
