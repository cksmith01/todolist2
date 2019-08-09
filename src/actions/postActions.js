import { TODO_LIST, TODO_ITEM, DELETE_ITEM } from './types';
import { BASE_URL } from '../constants'

export function fetchPosts() {
    return function (dispatch) {
        fetch(BASE_URL+'posts')
        .then(res => res.json())
        .then(items => dispatch({
            type: TODO_LIST,
            payload: items
        })).catch(e => console.warn(e));
    }
};

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

export const deletePost = (id) => dispatch => {
    console.log('dispatch ? '+dispatch);
    fetch(BASE_URL+'deletePost?id='+id)
    .then(res => res.json())
    .then(items => dispatch({
        type: DELETE_ITEM,
        payload: items
    })).catch(e => console.warn(e));
};
