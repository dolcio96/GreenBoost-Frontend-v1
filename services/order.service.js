import { fetchWrapper } from 'helpers';

export const orderService = {
   submitOrder,
};

function submitOrder(orderInfo) {
   return fetchWrapper.post(`/backend/submitorder`, orderInfo);
}