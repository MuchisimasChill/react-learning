import React from 'react';
import '../../css/ExpensesList.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
    const expensesContent =  props.items.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ));

    if (expensesContent.length === 0) {
        return <h2 className='expenses-list__fallback'>Founnd no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {expensesContent}
        </ul>
    );
}

export default ExpensesList;