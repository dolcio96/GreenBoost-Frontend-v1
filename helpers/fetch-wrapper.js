import { userService } from 'services';


export const fetchWrapper = {
    get,
    post,
    //put,
    //delete: _delete
};


function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},//, ...authHeader(url) },
        //credentials: 'include',
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function get(url){
    return fetch(url).then(handleResponse);
}


function handleResponse(response) {
    return response
}