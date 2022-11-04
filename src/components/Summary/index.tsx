import React, { useContext } from 'react';
import iconImg from '../../assets/entrada.svg'
import outcomeImg from '../../assets/saida.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if(transaction.type === 'deposit') {
  //     return acc + transaction.amount;
  //   }
  //   return acc;
  // }, 0);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdrwas += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;

  }, {
    deposits: 0,
    withdrwas: 0,
    total: 0,
  })

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={iconImg} alt="Saidas" />
        </header>
        <strong>-
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdrwas)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}