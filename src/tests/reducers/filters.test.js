import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should test default', () => {
const state = filterReducer(undefined,{type:'@@INIT'});
expect(state).toEqual({
    text: '', 
    sortBy: 'date', 
    startDate: moment().startOf('month'), 
    endDate: moment().endOf('month')
    });
});

test('should setSortBy amount', () => {
    const state = filterReducer(undefined, {type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should setSortBy date', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount', 
        startDate: undefined, 
        endDate: undefined
    }
    const state = filterReducer(currentState, {type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set textFilter', () => {
  const text = "New filter";

    const state = filterReducer(undefined, {type:'SET_TEXT_FILTER',text});
    expect(state.text).toBe(text);
});

test('should set startDate', () => {
    const startDate = moment(0).subtract(2,'days').valueOf
   
    const state = filterReducer(undefined, {type:'SET_START_DATE', startDate});
    expect(state.startDate).toBe(startDate);
});


test('should set endDate', () => {
    const endDate = moment(0).add(2,'days').valueOf()
    
    const state = filterReducer(undefined, {type:'SET_END_DATE', endDate});
    expect(state.endDate).toBe(endDate);
});


