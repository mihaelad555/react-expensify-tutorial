import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
//import expenses from '../fixtures/expenses'
const expenses =[{
    id: '1',
    description:'Gum',
    note:'',
    amount:195,
    createAt:0
    },
    {
    id: '2',
    description:'Rent',
    note:'',
    amount:109500,
    createAt: moment(0).subtract(4,'days').valueOf()
    },
    {id: '3',
        description:'credit Card',
        note:'',
        amount:4500,
        createAt:moment(0).add(4,'days').valueOf()
    }];

test('should test default', () => {
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
});

test('should remove expense by Id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense by wrong Id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:'-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses])
});

test('should add an expense', () => {
    const expense = { 
        id: '4',
        description: 'New Expense',
        note: 'new Note',
         amount:15000,
      createdAt: 2000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit an expense', () => {
    const amount = 215000;
    const action = {
       
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates :{ 
            amount
       }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(215000);
});


test('should not edit an expense', () => {
    const amount = 215000;
    const action = {
       
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates :{ 
            amount
       }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses])
});
