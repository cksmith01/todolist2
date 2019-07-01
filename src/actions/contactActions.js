import { CONTACT_SEND } from './types';

export const sendMessage = (postData) => dispatch => {
    fetch('http://localhost:8080/sendMessage', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(res => dispatch({
        type: CONTACT_SEND,
        payload: res.response
    })).catch(e => console.warn(e));
};