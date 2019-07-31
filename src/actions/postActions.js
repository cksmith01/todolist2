import { TODO_LIST, TODO_ITEM, DELETE_ITEM } from './types';

export function fetchPosts() {
    return function (dispatch) {
        fetch('http://localhost:8080/posts')
        .then(res => res.json())
        .then(items => dispatch({
            type: TODO_LIST,
            payload: items
        })).catch(e => console.warn(e));
    }
};

export const createPost = (postData) => dispatch => {
    fetch('http://localhost:8080/addPost', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(item => dispatch({
        type: TODO_ITEM,
        payload: item
    })).catch(e => console.warn(e));
};

export const deletePost = (id) => dispatch => {
    console.log('dispatch ? '+dispatch);
    fetch('http://localhost:8080/deletePost?id='+id)
    .then(res => res.json())
    .then(items => dispatch({
        type: DELETE_ITEM,
        payload: items
    })).catch(e => console.warn(e));
};
