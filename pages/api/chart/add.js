import { fetchWrapper } from 'helpers';

export default async function handler(req, res) {
  const { chartInfo } = req.body;

  const result = fetchWrapper.post(`/backend/chart/add`, chartInfo);

  res.send({
    result: result
  });
};