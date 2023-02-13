import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import { ResponseFuncs, User } from '@/lib/types'
import User from '@/lib/models/User';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;
  const errorHandler = (error: Error) => res.status(400).json({ error }); {
  
  const handleCase: ResponseFuncs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const connection = await dbConnect() 
    },

    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const connection = await dbConnect() 
    },
  }


  res.status(200).json({ userName: 'John Doe', email:'a@gmail.com' })
}
