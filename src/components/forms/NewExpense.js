import React from 'react';
import "../../css/ExpenseForm.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const submitExpensehandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSubmitExpense={submitExpensehandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;