import jwt from 'jsonwebtoken';

const METABASE_SITE_URL = "http://13.37.211.151:3000";
const METABASE_SECRET_KEY = "d0cbf10e75669919611b6888acde95c27633283c18be3e00985fac38c2334375";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { dashboardId, params } = req.body;

    const payload = {
      resource: { dashboard: dashboardId },
      params: params || {},
      exp: Math.round(Date.now() / 1000) + (10 * 60), // 10 minute expiration
    };

    const token = jwt.sign(payload, METABASE_SECRET_KEY);

    res.status(200).json({ iframeUrl: `${METABASE_SITE_URL}/embed/dashboard/${token}#bordered=true&titled=true` });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}