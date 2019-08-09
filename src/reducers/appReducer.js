import { TODO_LIST, TODO_ITEM, CONTACT_SEND, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [],
    item: {},
    contactResponse: {}
};

export default function (state = initialState, action) {
    console.log('appReducer: '+action.type+': '+action.payload+'');
    switch (action.type) {
        case TODO_LIST:
            return {
                ...state,
                items: action.payload
            }
        case TODO_ITEM:
            return {
                ...state,
                items: action.payload
            }
        case CONTACT_SEND:
            return {
                ...state,
                contactResponse: action.payload
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}
/*
    "..." is the "spread" operator which says return all the properties from the object (in this case state)
    after that happens the item(s) value gets overwritten by what's in the action.payload


    "..." can also be used like this
    function test(...numbers) {}
    in this situation is called the "rest" operator and indicates that the variable has an undertermined
    number of elements
 */