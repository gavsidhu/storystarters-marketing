import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const email = req.body.email;

    if (!email) {
      return res.status(400).json({ msg: 'Please enter email address' });
    }

    const listUrl =
      'https://uplevel-hq-llc.outseta.com/api/v1/email/lists/496v2Z9X/subscriptions';
    try {
      await axios.post(
        listUrl,
        {
          EmailList: { Uid: '496v2Z9X' },
          Person: {
            Email: email,
          },
        },
        {
          headers: {
            Authorization: process.env.OUTSETA_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );
      res.status(200).json({ msg: 'Subscribed!' });
    } catch (error) {
      return res.status(500).json({ msg: `Unexpected error` });
    }
  }
};

export default handler;
