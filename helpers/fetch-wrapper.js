import { userService } from 'services';

export const fetchWrapper = {
    get,
    post,
    post2
    //put,
    //delete: _delete
};


function post2(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },//, ...authHeader(url) },
        //credentials: 'include',
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}


function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },//, ...authHeader(url) },
        //credentials: 'include',
        body: body
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function get(url) {
    const requestOptions = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch(url, requestOptions).then(handleResponse);
}


function handleResponse(response) {
    return response
}