const baseUrl = "http://localhost:1234"

import { fetchWrapper } from 'helpers';

export const userService = {
  //  user: userSubject.asObservable(),
   // get userValue () { return userSubject.value },
   // login,
   // logout,
    register,
   // getAll,
  //  getById,
  //  update,
   // delete: _delete
};


function register(user) {
   // return console.log(123);
    return fetchWrapper.post(`${baseUrl}/api/auth/signup`, user);
}