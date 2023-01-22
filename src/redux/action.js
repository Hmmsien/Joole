import { Types } from './action-type'
import axios from "axios";

// Action creators
export const authStart = () => {
    return {
        type: Types.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: Types.AUTH_SUCCESS,
        token: token
    }
}
export const authFail = (error) => {
    return {
        type: Types.AUTH_FAIL,
        error: error
    }
}


export const auth = (username, password) => {
    // use dispatch as parameter
    // and dispatches an action to the store
    return dispatch => {
        //associate handlers with an asynchronous action's eventual success value or failure reason.
        return new Promise((resolve, reject) => {
            dispatch(authStart());
            const authInfo = {
                userName: username,
                password: password
            };
            // send request to api
            let url = 'http://localhost:8080/joole/user/authenticate';

            // axios: intercepts request and response
            axios.post(url, authInfo, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                console.log(response);
                // store the token in local
                localStorage.setItem('token', response.data);
                localStorage.setItem('user', username);
                dispatch(authSuccess(response.data));
                resolve();
            })
            .catch(err => {
                dispatch(authFail(err.response.error));
                reject(err);
            });
        });
    }
}

export const register = (username, password, email) => {
    // use dispatch as parameter
    // and dispatches an action to the store
    return dispatch => {
        // return a Promise from the action creator,
        // resolve the promise when the action is successful
        return new Promise((resolve, reject) => {
            const regisInfo = {
                userName: username,
                password: password,
                email: email
            };
            // send request to api
            let url = 'http://localhost:8080/joole/user/createUser';

            // axios: intercepts request and response
            axios.post(url, regisInfo, {
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(response => {
                console.log(response);
                resolve();
            })
            .catch(err => {
                //dispatch(authFail(err.response.data.error));
                reject(err);
            });
        });
    }
}