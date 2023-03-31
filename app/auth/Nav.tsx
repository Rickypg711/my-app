// 'use client'
import Link from "next/link";
import Login from "./login";
import Logged from "./Logged";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from '../../pages/api/auth/[...nextauth]'




export default async function name() {
    const session = await getServerSession(authOptions)
    // const session = await getSession(authOptions)
    console.log(session)
    return (
        <nav className=" flex justify-between items-center py-8 px-6">
            <Link href={'/'}>
            <h1>LINKLINK</h1>
            </Link>
            <ul>
              { !session?.user && <Login  />}
               {session?.user && <Logged image={session?.user?.image || ''}/>}
            </ul>
        </nav>
    )
}