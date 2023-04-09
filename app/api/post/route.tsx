// 'use client'
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react"
import {prisma }from '../../../prisma/script'


type Poss = {
  title?: string
}




export async function POST(request: NextRequest, res: NextResponse) {
  // const session = await getSession();
  // const session = await getServerSession(authOptions)
  // console.log(session, 'ya ?')
    const data: Poss = await request.json()
    
  const {title} = data;
  console.log(title)


  if(request.method === 'POST') {
    const session = await getServerSession(authOptions)
    if (!session){
      
console.log('log in morro')
      // return    console.log('log in foo')

      return NextResponse.error
  }
  // alert('sjdhfkdf')
  console.log('si se pudo wey')

  const prismaUser = await prisma.user.findUnique({
    where: {email: session?.user?.email },
  })

  if (title?.length > 300) {
    console.log('plese.write somethinfg smalles')
    return console.log("too long")
    
  }
  if(!title?.length){
    return console.log(' no empty please')
  }

  try{
    const results = await prisma.post.create({
      data: {
        title,
        userId: prismaUser?.id
      },
    })
  }catch(error){

  }
   return NextResponse.json({ title });


  

}
}


