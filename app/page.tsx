import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Login from './login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
     <h2 className=' text-red-300'>login site</h2>
     <p className=' text-lg text-green-300'>do it</p>
     <Login/>
   </div>
  )
}
