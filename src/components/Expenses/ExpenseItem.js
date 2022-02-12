import React, { useState } from 'react';
import '../../css/ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';
import Card from '../UI/Card';

const Expenseitem = (props) => {

    const [title, setTitle] = useState(props.title);

    
    const clickHandler = () => {
        setTitle("Updated!");
        console.log(title);
    }

    return (
        <Card className='row expense-item'>
            <ExpenseItemDate
                date={props.date}
            ></ExpenseItemDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default Expenseitem;