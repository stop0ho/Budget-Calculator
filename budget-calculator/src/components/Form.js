import React, { useState } from 'react';

const Form = ({ name, amount, handleName, handleAmount, handleOnclick }) => {
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [isAmountClicked, setIsAmountClicked] = useState(false);

  return (
    <>
      <div>
        <div>
          <div>지출 항목</div>
          <input
            type='text'
            onChange={handleName}
            value={name}
            onFocus={() => {
              setIsNameClicked(true);
            }}
            onBlur={() => setIsNameClicked(false)}
            placeholder={isNameClicked === true ? '' : '예) 렌트비'}
            required
          />
        </div>
        <div>
          <div>비용</div>
          <input
            onChange={handleAmount}
            value={amount}
            onFocus={() => {
              setIsAmountClicked(true);
            }}
            onBlur={() => setIsAmountClicked(false)}
            placeholder={isAmountClicked === true ? '' : '0'}
            type='number'
          />
        </div>
      </div>
      <button onClick={handleOnclick}>제출</button>
    </>
  );
};

export default Form;
