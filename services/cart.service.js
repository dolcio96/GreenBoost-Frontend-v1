import { fetchWrapper } from 'helpers';

export const getCartServices = {
   getCart,
};

function getCart(buyerId) {
   return fetchWrapper.post(process.env.DATABASE_URL + ":" + process.env.DATABASE_PORT + `/api/cart`, buyerId);
}