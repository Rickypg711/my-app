import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getSession } from 'next-auth/react';

export async function POST(req:  NextApiRequest, res: NextApiResponse) {
   
    if (req.method === 'POST') {
        // const session = await getServerSession(req, res, authOptions);
        const session = await getSession()
        if(!session)
        return res.status(401).json({message: 'sign in'})
        console.log(req.body)
    }
    
  }
   