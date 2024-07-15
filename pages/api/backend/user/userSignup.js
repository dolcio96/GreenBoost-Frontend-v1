import { fetchWrapper } from 'helpers';


/*export default async function register(user) {

    const result = await fetchWrapper.post(`/backend/auth/signup`, user);
    return  res.send(await result.json());
 }
*/
 export default  async function  handler(req, res) {

    try{
        const remoteResponse = await fetchWrapper.post(process.env.BACKEND_API_URL +`/api/auth/signup`, req.body);
        const remoteData = await remoteResponse.json();
        res.status(remoteResponse.status).json(remoteData);

    }catch (error) {
        console.error('Errore nell\'inoltro della richiesta:', error);
        res.status(500).json({ message: 'Errore nel server interno' });
      }

}