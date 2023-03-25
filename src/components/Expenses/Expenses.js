import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2000');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear); 
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <Card className="Expenses" >
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            ></ExpensesFilter>
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;