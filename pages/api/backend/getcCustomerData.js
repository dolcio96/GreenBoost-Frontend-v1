import { fetchWrapper } from 'helpers';

export default async function handler(req, res) {
  const customer = req.body;

  const result = fetchWrapper.post(process.env.BACKEND_API_URL + `/api/user/` + customer.userType + '/' + customer.userID);

  res.send({
    result: result
  });
};