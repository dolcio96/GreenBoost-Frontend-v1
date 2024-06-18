import { fetchWrapper } from 'helpers';

export default async function handler(req, res) {
  const customer = req.body;
  console.log(process.env.BACKEND_API_URL + `api/user/` + customer.userType + '/' + customer.userID);
  const result = await fetchWrapper.get(process.env.BACKEND_API_URL + `/api/user/` + customer.userType + '/' + customer.userID);
  
  res.send(await result.json());
};