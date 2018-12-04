import {addExpense , editExpense,removeExpense} from '../../actions/expenses';

test ('remove expense', () => {
 const action =removeExpense({id:'123bc'})
 expect(action).toEqual({
     type:'REMOVE_EXPENSE',
     id: '123bc'
 })

});

test ('edit expense', () => {
    const updates = {'note': 'New note value'};
    const action =editExpense('123bc', updates);
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123bc',
        updates:updates

    })
   });

   test ('add expense', () => {
    const expenseDate = {'note': 'New note value', 'description' :'new description', 'amount':1250, 'createdAt':1000};
    const action =addExpense( expenseDate);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {...expenseDate,
        id: expect.any(String)}

    })
   });

   test ('add expense with default', () => {
    const expenseDate = {'note': '', 'description' :'', 'amount':0, 'createdAt':0};
    const action =addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {...expenseDate,
        id: expect.any(String)}
    })
   });

