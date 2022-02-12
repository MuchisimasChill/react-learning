import './App.css';
import Expenses from './components/Expenses/Expenses';
import HeaderNavBar from './components/NavBar/HeaderNavBar'
import NewExpense from './components/forms/NewExpense';

const App = () => {
  const addExpenseHandler = (data) => {
    console.log('in App.js');
    console.log(data);
  }

  return (
    <div className="App" >
      <HeaderNavBar></HeaderNavBar>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses></Expenses>
    </div>
  );
}

export default App;