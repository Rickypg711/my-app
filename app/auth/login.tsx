'use client'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Login(){
    return (
        <li className=" list-none">
            <button className="bg-yellow-400 rounded-lg py-2 px-6" onClick={() => signIn()}>signIn</button>
        </li>
    )
}
