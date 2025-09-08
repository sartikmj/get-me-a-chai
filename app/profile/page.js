"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from 'next-auth/react'
import Profile from '../../components/Profile'

const ProfilePage = () => {

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            router.push('/profile')
        }
    }, [session, router])

    return (
        <div><Profile /></div>
    )
}

export default ProfilePage;