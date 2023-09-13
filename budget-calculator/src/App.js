import { useState } from 'react';
import './App.css';
import Form from './components/Form.js';

function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleOnclick = (e) => {
    e.preventDefault();
    console.log(name, amount);
    setName('');
    setAmount('');
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
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
    </div>
  );
}

export default App;
