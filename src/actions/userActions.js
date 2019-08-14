import { USER_ADD } from './types';
import { BASE_URL } from '../constants'

export const createUser = (userData) => dispatch => {
    fetch(BASE_URL+'saveUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(users => dispatch({
            type: USER_ADD,
            payload: users
        })).catch(e => console.warn(e));
};

