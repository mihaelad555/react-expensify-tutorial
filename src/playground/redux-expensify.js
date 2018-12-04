import  {createStore,combineReducers} from'redux';
import uuid from 'uuid'
//ADD_EXPENSE
const addExpense = ({description ='', note= '', amount =0, createdAt=0} ={}) => ({
    type: 'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//Remove_EXPENSE
const removeExpense = ({id} ={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text ='') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'

});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


// set Filter 

//Expense Add Reducer
const expensesReducerDefaultState =[];
const expensesReducer =(state=expensesReducerDefaultState, action) =>{
    switch (action.type) {
        case 'ADD_EXPENSE':
        //return  state.concat(action.expense);
        //the same effect as above
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return  state.filter(({id}) =>  id!== action.id     
            );
        case 'EDIT_EXPENSE':
            return state.map((expense)=> {
                if (expense.id ===action.id) {
                    return { ...expense, ...action.updates}
                }
                else { return expense;}
            });
                   
        default: return state;
    }
};

//Filter reducer
const filterReducerDefaultState ={text: '', sortBy: 'date', startDate: undefined, endDate: undefined};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER': 
         return  { ...state, text: action.text};
        case 'SORT_BY_AMOUNT': 
        return {
           ...state, sortBy:'amount'
        }
        case 'SORT_BY_DATE': 
        return {
            ...state, sortBy:'date'
         }
         case 'SET_START_DATE': 
            return {
             ...state, startDate: action.startDate
          }
          case 'SET_END_DATE': 
            return {
             ...state, endDate: action.endDate
          }
        default: return state;
    }
}

//timestamp (millisecond)


//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !=='string' || expense.description.toLowerCase().includes(text.toLowerCase())//expense.text;
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt<b.createAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ?1 : -1;
        }
    })
}
//store creation
const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters: filterReducer
    })
);
store.subscribe(() => {
    const state =store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
const expenseOne = store.dispatch(addExpense({description:'Rent', amount:00, createdAt:-21000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffe', amount:300, createdAt:-1000}));
// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense( expenseTwo.expense.id, { amount:250}));
 //store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
//store.dispatch(sortByDate());
//store.dispatch(setTextFilter(''));
store.dispatch(setStartDate(125));
//store.dispatch(setEndDate('5678'));
const demoState = {
    expenses:[{
        id:'jdjfjdfj',
        description: 'January Rent',
        note:'This the final payment for the adress',
        amount:54550,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user ={
        name:'jen',
        age:24
};
console.log({ ...user, location:'Philadelphia',
age:25});