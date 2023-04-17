import React from 'react';

function Log({ transactions }) {
  return (
    <div>
      <h2>Transaction Log</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>{transaction.type}: {transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default Log;