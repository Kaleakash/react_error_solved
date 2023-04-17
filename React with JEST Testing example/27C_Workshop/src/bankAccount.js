import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, credit, transfer } from './action';
import './index.css';

const BankAccount = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance);
  const transactions = useSelector(state => state.transactions);
  const [transferTo, setTransferTo] = useState("");
  const [depositeamount,setDepositeAmount]=useState("");
  const [creditamount,setCreditAmount]=useState("");
  const [transferAmount,setTransferAmount]=useState("");

  const handleDeposit = (event) => {
    event.preventDefault();
    //const amount = Number(event.target.amount.value);
    dispatch(deposit(depositeamount));
    setDepositeAmount("");
  };

  const handleCredit = (event) => {
    event.preventDefault();
    //const amount = Number(event.target.amount.value);
    dispatch(credit(creditamount));
    setCreditAmount("");
  };

  const handleTransfer = (event) => {
    event.preventDefault();
    //const amount = Number(event.target.amount.value);
    dispatch(transfer(transferAmount, transferTo));
    setTransferAmount("");
    setTransferTo("");
  };

  const [selectedTransaction, setSelectedTransaction] = useState("");

  const transactionOptions = transactions.map((transaction, index) => {
    return <option key={index} value={transaction}>{transaction}</option>;
  });

  return (
    <div>
      {/* A box to credit and deposit amounts */}
      <div className="bank-account">
        <h2 title='balanceAmount'>Bank Account Balance: ${balance}</h2>
        <form onSubmit={handleDeposit}>
          <label htmlFor="deposit-amount">Deposit Amount:</label>
          <input data-testid="deposit-amount" type="number" name="depositeamount" 
          onChange={e=> setDepositeAmount(eval(e.target.value))} 
          value={depositeamount}/>
          <button type="submit" data-testid="deposite-button">Deposit</button>
        </form>
        <form onSubmit={handleCredit}>
          <label htmlFor="credit-amount">Credit Amount:</label>
          <input data-testid="withdraw-amount" type="number" name="creditamount" 
          onChange={e=> setCreditAmount(eval(e.target.value))} 
          value={creditamount}/>
          <button type="submit" data-testid="withdraw-button">Credit</button>
        </form>
      </div>

      {/* A box to transfer money to a certain user ID */}
      <div className="bank-account">
        <form onSubmit={handleTransfer}>
          <label htmlFor="transfer-to" >Transfer to:
          <input data-testid="transfer-to" type="text" name="transferTo" value={transferTo} onChange={e => setTransferTo(e.target.value)} />
          </label>
          <label htmlFor="transfer-amount">Amount:
            <input data-testid="transfer-amount" type="number" name="transferAmount" value={transferAmount} onChange={e=> setTransferAmount(eval(e.target.value))}/>
          </label>
          <button type="submit" data-testid="transfer-button">Transfer</button>
        </form>
      </div>

      {/* Displaying the Transaction log in Drop down format */}
      <div className="transaction-log">
  <h2>Transaction Log:</h2>
  <select value={selectedTransaction} onChange={(event) => setSelectedTransaction(event.target.value)}>
    <option value={null}>Select a transaction</option>
    {transactionOptions}
  </select>
    {selectedTransaction && (
        <div>
        <h3>Selected transaction:</h3>
        <p>{selectedTransaction}</p>
        </div>
        )}

    </div>
    </div>
  );
};



export default BankAccount;
