import { CONTACT_SEND } from './types';
import { BASE_URL } from '../constants'

export const sendMessage = (postData) => dispatch => {
    fetch(BASE_URL+'./sendMessage', {
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