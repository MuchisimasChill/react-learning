import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [{
    id: 'e1',
    title: 'MyBirth',
    amount: 0.35,
    date: new Date(2000, 3, 20)
  },
  {
    id: 'e2',
    title: 'NotMyBirth',
    amount: 1.25,
    date: new Date(2000, 3, 22)
  },
  {
    id: 'e3',
    title: 'MyBirth 21!',
    amount: 300,
    date: new Date(2021, 3, 20)
  },
  {
    id: 'e4',
    title: 'Random dateeeeee',
    amount: 425,
    date: new Date(2035, 11, 3)
  },
  ];

  let expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    expenseItems.push(
      <ExpenseItem 
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}
      ></ExpenseItem>
    );
  }

  return (
    <div className="App" >
      <h2> Let `s get started!</h2>
      {expenseItems}
    </div>
  );
}

export default App;