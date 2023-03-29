'use client'
import { Inter } from 'next/font/google';
import AddPost from './components/AddPost';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main className=' bg-red-500'>
     <h1>okay</h1>
     <AddPost/>
   </main>
  )
}
