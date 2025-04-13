import React from 'react'
import HeaderLogo from './HeaderLogo'
import Navigation from './Navigations'
import { UserButton } from '@clerk/nextjs'
import { ClerkLoading, ClerkLoaded } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import WelcomeMsg from './WelcomeMsg'

const Header = () => {
    return (
        <div className="w-full bg-gradient-to-b from-blue-700 to-blue-500">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="logo hidden lg:flex">
                        <HeaderLogo />
                    </div>
                    <div className="navigation flex-1 lg:flex-none">
                        <Navigation />
                    </div>
                    <div className="profile">
                        <ClerkLoaded>
                            <UserButton />
                        </ClerkLoaded>
                        <ClerkLoading>
                            <Loader2 className="animate-spin text-white" />
                        </ClerkLoading>
                    </div>
                </div>
                <div className="mt-4 lg:mt-6">
                    <WelcomeMsg />
                </div>
            </div>
        </div>
    )
}

export default Header