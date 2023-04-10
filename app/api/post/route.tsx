import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "../../../prisma/script";
import axios from "axios";

type Poss = {
  title?: string;
};


//  need to work on errot handling message not returning message 


export async function POST(request: NextRequest, res: NextResponse) {
  // console.log(session, 'ya ?')
  const data: Poss = await request.json();

  const { title } = data;
  console.log(title);

  if (request.method === "POST") {
    const session = await getServerSession(authOptions);
    if (!session) {
      console.log('loginf foo')
      alert("log in morro");
      // return    console.log('log in foo')

      
    }
    // alert('sjdhfkdf')
    console.log("si se pudo wey");

    // prisma user
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
    });

    // input check
    if (title?.length > 300) {
      console.log("plese.write somethinfg smalles");
      return console.log("too long");
    }
    if (!title?.length) {
      return console.log(" no empty please");
    }
    // < inout check up

    try {
      const results = await prisma.post.create({
        data: {
          title,
          userId: prismaUser?.id,
        },
      });
    } catch (error) {}

    return NextResponse.json({ data });
  }
}
