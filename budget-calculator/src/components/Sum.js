import React from 'react';
import '../styles/Sum.css';

export default function Sum({ budget }) {
  let allSum = 0;
  budget.forEach((element) => {
    allSum += Number(element.amount);
  });
  return <div className='sum'>총지출 : {allSum}원</div>;
}
