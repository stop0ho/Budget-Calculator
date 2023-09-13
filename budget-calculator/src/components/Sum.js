import React from 'react';

export default function Sum({ budget }) {
  let allSum = 0;
  budget.forEach((element) => {
    console.log(element.amount);
    allSum += Number(element.amount);
  });
  return <div>총지출 : {allSum}원</div>;
}
