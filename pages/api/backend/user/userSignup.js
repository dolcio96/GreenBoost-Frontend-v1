import { fetchWrapper } from 'helpers';


/*export default async function register(user) {

    const result = await fetchWrapper.post(`/backend/auth/signup`, user);
    return  res.send(await result.json());
 }
*/
 export default  function register(user) {

    return  fetchWrapper.post(`/backend/auth/signup`, user);
}