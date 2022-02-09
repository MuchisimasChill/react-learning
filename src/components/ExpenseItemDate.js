import '../css/ExpenseDate.css'

function ExpenseitemDate(props) {
    const month = props.date.toLocaleString('en-US', {month: 'short'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});

    return (
        <div className='expense-date__container'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseitemDate;