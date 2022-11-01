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
   return fetchWrapper.post(`/backend/auth/signup`, user);
}