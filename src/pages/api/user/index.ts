import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import { ResponseFuncs, User } from '@/lib/types'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({ userName: 'John Doe', email:'a@gmail.com' })
}
