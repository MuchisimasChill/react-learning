import ExpenseItem from './ExpenseItem';

const Expenses = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Car',
            amount: 0.35,
            date: new Date(2000, 3, 20)
        },
        {
            id: 'e2',
            title: 'Laptop',
            amount: 1.25,
            date: new Date(2000, 3, 22)
        },
        {
            id: 'e3',
            title: 'UAH',
            amount: 300,
            date: new Date(2021, 3, 20)
        },
        {
            id: 'e4',
            title: 'Random expenseeeeee',
            amount: 425,
            date: new Date(2035, 11, 3)
        },
    ];

    let expenseItems = [];
    for (let i = 0; i < expenses.length; i++) {
        const expense = expenses[i];
        expenseItems.push(
            <ExpenseItem
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            ></ExpenseItem>
        );
    }

    return (
        <div className="Expenses" >       
            {expenseItems}
        </div>
    );
}

export default Expenses;