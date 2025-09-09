"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import Profile from '../../components/Profile'

const ProfilePage = () => {



    return (
        <div><Profile /></div>
    )
}

export default ProfilePage;