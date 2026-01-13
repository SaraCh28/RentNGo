import React from 'react'
import Checkbox from './Checkbox'
import { Link } from 'lucide-react'
import Button from './ui/buttonNew'

export default function MyNavbar() {
  return (
    <div><nav className="absolute top-0 left-0 w-full flex justify-between items-center p-5 pt-1 z-20">
        <div className="flex items-center gap-3">
          <Checkbox className="-mt-2.5 z-100" />
          <img src="/logo2.png" alt="Logo" className="w-15 h-15 object-contain" />
          <h1 className="text-2xl text-white">
            RentN<span className="text-[#6438c2]">Go</span>
          </h1>
        </div>

        <div className="relative md:flex items-center gap-6 text-white text-sm tracking-wide">
          {/* <Link href="#Login"className="py-2 font-bold text-[#6438c2] hover:text-purple-500 transition"> */}
          Login

           {/* </Link> */}
          {/* <Link href="#signUp">  */}
          <Button action="Sign Up" />
          {/* </Link> */}
        </div>
      </nav>
      </div>
  )
}
