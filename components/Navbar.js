"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession();

  if(session){
    return <>
    <div className='bg-black text-white flex justify-between items-center px-4 h-16'>

      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
    </>
  }

  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16'>
      <div className="logo font-bold flex jusitfy-center items-center">
        <img src="tea.gif" width={44} alt="" />
        <span>GET ME A CHAI !</span>
      </div>
      <ul className='flex justify-between gap-4'>
        {/* <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Log In</li> */}

        <div>
          <Link href={"/login"} >
            <button
              className="relative px-8 py-3 text-lg font-semibold text-white rounded-xl 
            bg-gradient-to-r from-black via-[#2a0d5c] to-[#6633ee] 
            shadow-lg shadow-[#6633ee]/40
            hover:shadow-xl hover:shadow-[#6633ee]/60
            hover:scale-105 active:scale-95
            transition-all duration-300 ease-out focus:outline-none"
            >
              Login
            </button>

          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar