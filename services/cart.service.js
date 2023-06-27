import { fetchWrapper } from 'helpers';

export const getCartServices = {
   getCart,
};

function getCart(buyerId) {
   return fetchWrapper.post(`/backend/cart`, orderID);
}