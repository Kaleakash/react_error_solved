import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent,screen } from '@testing-library/react';
import BankAccount from './bankAccount';
import { Provider, useDispatch } from 'react-redux';
import { legacy_createStore as createStore} from 'redux'
import reducer from './reducers';
describe('BankAccount', () => {
  const store = createStore(reducer);
  it('Check Initial Balance Test', async () => {
    render(
    <Provider store={store}>
      <BankAccount/>
    </Provider>
    );
    const balaceAmount = await screen.findByTitle("balanceAmount")
    expect(balaceAmount.textContent).toBe("Bank Account Balance: $0");
    });
    it('Check Balance After Deposite', async () => {
      render(
      <Provider store={store}>
        <BankAccount/>
      </Provider>
      );
      const balaceAmount = await screen.findByTitle("balanceAmount")
      expect(balaceAmount.textContent).toBe("Bank Account Balance: $0");
      const depositeAmount = screen.getByTestId("deposit-amount");
      const depositeButton = screen.getByTestId("deposite-button");
      fireEvent.change(depositeAmount, { target: { value: 100 } });
      fireEvent.click(depositeButton);
      expect(balaceAmount.textContent).toBe("Bank Account Balance: $100");
      });

      it('Check Balance After withdrawn', async () => {
        render(
        <Provider store={store}>
          <BankAccount/>
        </Provider>
        );
        const balaceAmount = await screen.findByTitle("balanceAmount")
        expect(balaceAmount.textContent).toBe("Bank Account Balance: $100");
        const withdrawAmount = screen.getByTestId("withdraw-amount");
        const withdrawButton = screen.getByTestId("withdraw-button");
        fireEvent.change(withdrawAmount, { target: { value: 50 } });
        fireEvent.click(withdrawButton);
        expect(balaceAmount.textContent).toBe("Bank Account Balance: $50");
        });
        it('Transfer Amount and check balance', async () => {
          render(
          <Provider store={store}>
            <BankAccount/>
          </Provider>
          );
          const balaceAmount = await screen.findByTitle("balanceAmount")
          expect(balaceAmount.textContent).toBe("Bank Account Balance: $50");
          const transferTo = screen.getByTestId("transfer-to");
          const transferAmount = screen.getByTestId("transfer-amount");
          const transferButton = screen.getByTestId("transfer-button");

          fireEvent.change(transferTo, { target: { value: 1 } });
          fireEvent.change(transferAmount, { target: { value: 50 } });
          fireEvent.click(transferButton);
          expect(balaceAmount.textContent).toBe("Bank Account Balance: $0");
          });
  });
  