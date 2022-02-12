import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import HeaderNavBar from './components/NavBar/HeaderNavBar'
import NewExpense from './components/forms/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Car',
    amount: 0.35,
    date: new Date(2000, 3, 20)
  },
  {
    id: 'e2',
    title: 'Laptop',
    amount: 1.25,
    date: new Date(2000, 3, 22)
  },
  {
    id: 'e3',
    title: 'UAH',
    amount: 300,
    date: new Date(2021, 3, 20)
  },
  {
    id: 'e4',
    title: 'Random expenseeeeee',
    amount: 425,
    date: new Date(2035, 11, 3)
  },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    const id = Math.random().toString();
    expense.id =id;
    setExpense(prevExpenses => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div className="App" >
      <HeaderNavBar></HeaderNavBar>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;