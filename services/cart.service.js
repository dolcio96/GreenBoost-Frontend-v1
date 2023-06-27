import { fetchWrapper } from 'helpers';

export const getCartServices = {
   getCart,
};

function getCart(buyerId) {
   return fetchWrapper.post(process.env.BACKEND_API_URL + `/api/cart/`, buyerId);
}