import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2000');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear); 
    }

    return (
        <Card className="Expenses" >
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            ></ExpensesFilter>
            <ExpensesList items={props.items} year={filteredYear} />
        </Card>
    );
}

export default Expenses;