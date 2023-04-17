
export const DEPOSIT = 'DEPOSIT';
export const CREDIT = 'CREDIT';
export const TRANSFER = 'TRANSFER';

export const deposit = (amount) => ({
  type: DEPOSIT,
  amount
});

export const credit = (amount) => ({
  type: CREDIT,
  amount
});

export const transfer = (amount, recipientId) => ({
  type: TRANSFER,
  payload: { amount, recipientId }
})
