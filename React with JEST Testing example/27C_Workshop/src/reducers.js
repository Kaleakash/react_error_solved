import { DEPOSIT, CREDIT, TRANSFER } from './action';

// Setting up the intital state of the store.
const initialState = {
  balance: 0,
  transactions: []
};

// Setting up reducer switch cases
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case DEPOSIT:
  return {
    ...state,
    transactions: [...state.transactions,"Deposit : " + action.amount], // this will update the transaction array
    balance: state.balance + action.amount // this will update the balance
  };

case CREDIT:
  return {
    ...state,
    transactions: [...state.transactions,"Credit : " + action.amount],
    balance: state.balance - action.amount
  };

  case TRANSFER:
    const { amount, recipientId } = action.payload;
    console.log({ amount, recipientId});
    if (state.balance < amount) {
      alert("Insufficient amount you can't transfer")
      return state; // insufficient balance, no transfer made
    }
    return {
      ...state,
      transactions: [...state.transactions,`Transfer amount: ${amount} To Account Number: ${recipientId}`],
      balance: state.balance - amount
    };

  // Providing the default action, which returns state when no case is taken
    default:
      return state;
  }
};

// exporting the module we made
export default reducer;
