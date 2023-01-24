import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://uplevel-hq-llc.outseta.com/api/v1/crm/people';
  if (req.method === 'POST') {
    const email = req.body.email;
    const origin = req.body.origin;

    if (!email) {
      return res.status(400).json({ msg: 'Please enter email address' });
    }

    try {
      const response = await axios.post(
        url,
        {
          Email: email,
          Origin: origin,
        },
        {
          headers: {
            Authorization: process.env.OUTSETA_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );
      //console.log(response.data)
      res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ msg: `Unexpected error` });
    }
  }
};

export default handler;
