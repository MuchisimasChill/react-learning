import '../css/ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';

function Expenseitem(props) {
    return (
        <div className='row expense-item'>
            <ExpenseItemDate
                date={props.date}
            ></ExpenseItemDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default Expenseitem;