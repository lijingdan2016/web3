import {combineReducers} from 'redux';

let counter = (state=0, action) => {
    switch(action.type) {
        case 'add':
            return state+action.value;
        case 'dec':
            return state-1;
        default:
            return state;
    }
}

let initValue = {
    // list: [1,2,3]
    list: []
}
let todo = (state=initValue, action) => {
    switch(action.type) {
        case 'add_item':
            let newState = JSON.parse(JSON.stringify(state));
            // var obj = Object.assign({}, state, {a: 100});
            newState.list.push(action.value);
            return newState;
        case 'dec_item':
            let neState = JSON.parse(JSON.stringify(state));
            neState.list.splice(action.value, 1);
            return neState;
        default:
            return state;
    }
}

export default combineReducers({
    counter, todo// <=> counter:counter, todo:todo
});