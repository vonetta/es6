var expense = {
    type: 'Business',
    amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

//es6

const { type }= expense;
const { amount }=expense