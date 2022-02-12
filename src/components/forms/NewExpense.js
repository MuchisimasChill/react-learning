import React, { useState } from 'react';
import "../../css/ExpenseForm.css";
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

const NewExpense = (props) => {
    const showFormHandler = () => {
        const formContent = 
            <div className='new-expense'>
                <ExpenseForm onSubmitExpense={submitExpenseHandler}></ExpenseForm>
            </div>;
    
        setContent(formContent);
    }

    const content = <button onClick={showFormHandler}>Add new Expense</button>;
    
    const [actualContent, setContent] = useState(content);

    const submitExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setContent(content);
    };


    return (
        <Card>
            {actualContent}
        </Card>
    );
}

export default NewExpense;