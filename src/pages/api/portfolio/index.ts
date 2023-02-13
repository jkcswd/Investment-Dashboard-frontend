import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import { ResponseFuncs } from '@/lib/sharedInterfaces'
import Portfolio from '@/lib/models/Portfolio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const errorHandler = (error: Error) => res.status(400).json({ error });
  
  const handleCase: ResponseFuncs = {
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        await dbConnect();
        const portfolio = new Portfolio(req.body);
        await portfolio.save();

        res.json(portfolio);
      } catch (error : any) {
        errorHandler(error);
      }
    },
  }

  const response = handleCase[method];
  if (response) response(req, res);
  else res.status(400).json({ error: "No Response" });
}
