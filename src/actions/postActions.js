import { TODO_ITEM } from './types';
import { BASE_URL } from '../constants'

export const createPost = (postData) => dispatch => {
    fetch(BASE_URL+'addPost', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(items => dispatch({
        type: TODO_ITEM,
        payload: items
    })).catch(e => console.warn(e));
};

