import { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Lists from './components/Lists';
import Sum from './components/Sum';

function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [budget, setBudget] = useState([]);

  const handleOnclick = (e) => {
    console.log(name, amount);
    const newItem = {
      id: Date.now(),
      name: name !== '' ? name : '이름 없음',
      amount: amount,
    };
    setBudget((prev) => [...prev, newItem]);

    setName('');
    setAmount(0);
    console.log('아이템이 생성되었습니다');
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
  };
  return (
    <div>
      <h1>예산 계산기</h1>
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
      <Sum budget={budget} />
    </div>
  );
}

export default App;
