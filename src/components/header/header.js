import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (<header className=" shadow-lg flex justify-between items-center max-w-[80%] mx-auto pt-[10px]">
    
     
        <div className="text-2xl font-bold text-green-400">GiveHope</div>
        <div className=" text-lg  flex gap-[20px]">
          <Link href={"/"} className="hover:text-green-300 text-green-400 cursor-pointer">Home</Link>
          <Link href={"/projects"} className="hover:text-green-300 text-green-400 cursor-pointer">Project</Link>
          <Link href={"/contacts"} className="hover:text-green-300 text-green-400 cursor-pointer">Contacts</Link>
          <Link href={"/about"} className="hover:text-green-300 text-green-400 cursor-pointer">About us</Link>
        </div>
   
      <div className="space-x-4">
        <button className="bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white py-2 px-4 rounded-xl">Login</button>
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-xl">Sign Up</button>
      </div>

  </header>
  )
}

export default Header
