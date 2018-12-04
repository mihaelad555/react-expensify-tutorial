import moment from 'moment';
import {
    setStartDate, 
    setEndDate, 
    setTextFilter, 
    sortByAmount,
    sortByDate} from '../../actions/filters';


test ('should set startDate', () => {
   const startDate = moment();
   const action = setStartDate(startDate);
   expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate
   });
   
});

test ('should set endDate', () => {
    const endDate = moment();
    const action = setEndDate(endDate);
    expect(action).toEqual({
     type: 'SET_END_DATE',
     endDate
    });
   
});

test ('should set Text Filter', () => {
    const textFilter = 'rent';
    const action = setTextFilter(textFilter);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text:textFilter
    });
   
});
test ('should set sortByAmount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
   
});

test ('should set sortByDate', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
   
});
