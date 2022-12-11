import { fetchWrapper } from 'helpers';

export const orderService = {
   submitOrder,
};

function submitOrder(order_info) {
   return fetchWrapper.post(`/backend/order`, order_info);
}