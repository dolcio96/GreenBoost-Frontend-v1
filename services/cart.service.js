import { fetchWrapper } from 'helpers';

export const orderService = {
   getCart,
};

function getCart(buyerId) {
   return fetchWrapper.post(`/backend/cart`, orderID);
}