
import { fetchWrapper } from 'helpers';

export default async function handler(req, res) {
  const { userType, userID } = req.query; // Estrai i parametri dalla query

  try {
    const remoteResponse = await fetchWrapper.get(process.env.BACKEND_API_URL + `/api/user/` + userType + '/' + userID);
    const remoteData = await remoteResponse.json();
    res.status(remoteResponse.status).json(remoteData);

  } catch (error) {
    console.error('Errore nell\'inoltro della richiesta:', error);
    res.status(500).json({ message: 'Errore nel server interno' });
  }
}