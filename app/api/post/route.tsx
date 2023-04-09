// 'use client'
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useSession } from "next-auth/react"
import { Prisma } from "@prisma/client";





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

  if (title?.length > 300) {
    console.log('plese.write somethinfg smalles')
    return console.log("too long")
    
  }
  if(!title?.length){
    return console.log(' no empty please')
  }

  // try{
  //   const results = await prisma.post
  // }catch(error){

  // }
   return NextResponse.json({ title });


  

}
}


