import { fetchWrapper } from 'helpers';

export const getUserDataService = {
   getData,
   //  getById,
   //  update,
   // delete: _delete
};

async function getData(userID) {
   return await fetchWrapper.get(`/backend/crud/buyer/`+ userID);
}