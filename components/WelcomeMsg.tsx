"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs'

const WelcomeMsg = () => {
    const { user, isLoaded } = useUser()

    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    {isLoaded && user ? `Welcome Back, ${user.firstName || ''}` : 'Welcome Back'}
                </h1>
            </div>
            <p className="text-blue-300 text-sm sm:text-base">
                This is your Financial Overview Report
            </p>
        </div>
    )
}

export default WelcomeMsg