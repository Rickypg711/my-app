import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/prisma/script";

export async function GET(request: NextApiRequest, res: NextApiResponse) {
  
    if (request.method === 'GET') {
    
  
      try {
        const data = await prisma.post.findMany();
        res.json(data)
      } catch (error) {
          res.json([error: "error"])
      }
  
    }
  }
  