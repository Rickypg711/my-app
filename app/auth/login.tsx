'use client'

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

// export default function Login(){
//     // const { data: session } = useSession()
//     return (
//         <li className=" list-none">
//             <button className="bg-yellow-400 rounded-lg py-2 px-6" onClick={() => signIn()}>signIn</button>
//         </li>
//     )
// }

type User = {image: string}

export default function Login({image} : User) {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className=" flex justify-between gap-6">
        <button className="bg-yellow-400 rounded-lg py-2 px-6" onClick={() => signOut()}>Sign out</button>
        <Link href={'/dashboard'}>
        <Image 
        width={64}
        height={64}
        className='rounded-full'
        src={image}
        alt=''
        priority></Image>
      </Link>
      </div>
    )
  }
  return (
    <>
      <button  className="bg-yellow-400 rounded-lg py-2 px-6" onClick={() => signIn()}>Sign in</button>
      
    </>
  )
}