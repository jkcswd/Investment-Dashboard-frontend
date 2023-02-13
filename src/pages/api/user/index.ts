import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import { ResponseFuncs } from '@/lib/types'
import User from '@/lib/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const errorHandler = (error: Error) => res.status(400).json({ error });
  
  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        await dbConnect();
        const users = await User.find({});

        res.json(users);
      } catch (error: any) {
        errorHandler(error);
      }
    },

    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        await dbConnect();
        const user = new User(req.body);
        await user.save();

        res.json(user);
      } catch (error : any) {
        errorHandler(error);
      }
    },
  }

  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response" });
}
