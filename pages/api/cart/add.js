import { fetchWrapper } from 'helpers';

export default async function handler(req, res) {
  const chartInfo = req.body;

  const result = fetchWrapper.post(process.env.BACKEND_API_URL + `/api/cart/add`, chartInfo);

  res.send({
    result: result
  });
};