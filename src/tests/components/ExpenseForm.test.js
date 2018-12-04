import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from  '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';


test('should render ExpenseForm', () => {

    const wrapper =shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});



test('should render Expense Form with data', () => {
    const wrapper =shallow(<ExpenseForm {...expenses[0]} />);
    //const wrapper =shallow(<ExpenseForm expense = {expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})


test('should render error for invalid form submission', () => {
    const wrapper =shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {preventDefault: () => {}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description input', () => {
    const value = 'NewDescription';
    const wrapper =shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {target: {value}});
    expect(wrapper.state('description')).toBe(value);
});

// test('should set textarea note', () => {
//     const value = 'New note value';
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('textarea').simulate('change', {
//         target: {value}
//     });
//     expect(wrapper.state('note')).toBe(value);
// });


test('should setvalid amount', () => {
    const value = '23.50';
    const wrapper =shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {target: {value}});
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set invalid amount', () => {
    const value = '12.122';
    const wrapper =shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {target: {value}});
    expect(wrapper.state('amount')).toBe('');
});

test('should submit form ', () => {
    const onSubmitSpy = jest.fn();
    // onSubmitSpy('Andrew', 'Boston');
    // expect(onSubmitSpy).toHaveBeenCalledWith('Andrew','Boston');
     const wrapper =shallow(<ExpenseForm expense ={expenses[0]} onSubmit={onSubmitSpy}/>);
     wrapper.find('form').simulate('submit', {preventDefault: () => {}});
     expect(wrapper.state('error')).toBe('');
     expect(onSubmitSpy).toHaveBeenLastCalledWith({
         description: expenses[0].description,
         amount: expenses[0].amount,
         note: expenses[0].note,
         createdAt:expenses[0].createdAt
        });
});


test('should set new date on dateChange', () => {
    const now = moment(0);
     const wrapper =shallow(<ExpenseForm />);
     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
     expect(wrapper.state('createdAt')).toEqual(now);
});


test('should check onFocusChange', () => {
    const focused= true;
     const wrapper =shallow(<ExpenseForm />);
     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
     expect(wrapper.state('calendarFocused')).toBe(focused);
});