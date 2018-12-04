import {createStore, bindActionCreators} from 'redux';

//action generators

// const add = ({a,b},c) => {
//     return a+b +c;
// };
// console.log(add({a:5,b:12}));


// const incrementCount = ({payload} ={}) => ({
//     type:'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy :1
// });

const incrementCount = ({incrementBy=1} ={}) => ({
    type:'INCREMENT',
    incrementBy
});
const decrementCount = ({decrementBy=1} ={}) => ({
    type:'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type:'SET',
    count
});

const resetCount = () => ({
    type:'RESET'
});

//Reducers
//1. Reducer are pure functions dependes only the input
//2. Never change state or action

const countReducer = (state ={count:0}, action)=> {
    switch(action.type) {
    case 'INCREMENT' :
        
        return {
            count: state.count + action.incrementBy
            
        };
    case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        }
    case 'RESET':
        return {
            count: 0
        } 
    case 'SET':
        return {
            count: action.count
        }         
    default: return state;
    }
};
const store = createStore(countReducer)
store.subscribe(()=> {
    console.log(store.getState());
});


//Actions


store.dispatch(incrementCount({incrementBy:5}));


store.dispatch(resetCount());
store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(setCount({count:101}));

console.log(store.getState());