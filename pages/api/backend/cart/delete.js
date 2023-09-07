import { fetchWrapper } from 'helpers';

export default async function handler(req, res) {
  const rowId = req.body;

  const result = fetchWrapper.post(process.env.BACKEND_API_URL + `/api/cart/delete`, rowId);

  res.send({
    result: result
  });
};