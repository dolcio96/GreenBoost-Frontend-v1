import { fetchWrapper } from 'helpers';

export const getUserDataService = {
   getData,
   //  getById,
   //  update,
   // delete: _delete
};

function getData(userID) {
   return  fetchWrapper.get(`/backend/crud/buyer/`+ userID);
}