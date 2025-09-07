"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession();

  const [showDropdown, setShowDropdown] = useState(false)

  // if (session) {
  //   return <>
  //     <div className='bg-black text-white flex justify-between items-center px-4 h-16'>

  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </div>
  //   </>
  // }

  return (
    <nav className='bg-black text-white flex justify-between items-center px-4 h-16'>

      <Link href={"/"} className="logo font-bold flex justify-center items-center" >
        <img src="tea.gif" width={44} alt="" />
        <span>GET ME A CHAI !</span>
      </Link>

      <ul className='flex justify-between gap-4'>
        {/* <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Log In</li> */}

        <div className='reltive'>
          {session &&
            <>
              <button onClick={() => setShowDropdown(!showDropdown)} onBlur={() => setTimeout(() => setShowDropdown(false), 300)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="mx-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Welcome {session.user.email}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>


              <div id="dropdown" className={`z-10 ${showDropdown ? "" : "hidden"} absolute right-[140px] bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                  </li>
                  <li>
                    <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                  </li>
                  <li>
                    <Link href="#" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                  </li>
                </ul>
              </div>
            </>
          }

          {/* {session && <Link href={"/profile"}><button className='text-white bg-gradient-to-br from-purple-600 
          to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
          dark:focus:ring-blue-800
          ' >Profile </button></Link>} */}


          {session && <button className='text-white bg-gradient-to-br from-purple-600 
          to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
          font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
          dark:focus:ring-blue-800
          ' onClick={() => signOut()} >LogOut </button>}

          {!session &&

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
          }
        </div>
      </ul>
    </nav>
  )
}

export default Navbar