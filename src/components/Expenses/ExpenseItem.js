import '../../css/ExpenseItem.css';
import ExpenseItemDate from './ExpenseItemDate';
import Card from '../UI/Card';

const Expenseitem = (props) => {
    return (
        <Card className='row expense-item'>
            <ExpenseItemDate
                date={props.date}
            ></ExpenseItemDate>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default Expenseitem;