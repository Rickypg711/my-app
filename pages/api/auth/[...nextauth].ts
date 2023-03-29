import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import type { NextAuthOptions } from 'next-auth'
const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  // your configs
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
}

export default NextAuth(authOptions);



// export default NextAuth({
 
// })