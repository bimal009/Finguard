import { ClerkLoaded, ClerkLoading, SignIn, } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function Page() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-secondary-foreground to-primary flex flex-col items-center justify-center p-4">



            {/* Main content container with glass effect */}
            <div className="  backdrop-blur-lg rounded-2xl  p-8 w-full max-w-md flex flex-col justify-center items-center">
                <div className="h-24 w-24 sm:h-32 sm:w-32  relative justify-center items-center mb-4">
                    <Image
                        src="/logo2.png"
                        fill
                        className="object-contain drop-shadow-lg"
                        alt="FinGuard Logo"
                    />
                </div>
                <div className="mb-6">
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">Welcome to FinGuard</h1>
                        <p className="text-blue-100 text-sm mb-6">Your personal financial security assistant</p>
                    </div>
                    <div className="w-full  backdrop-blur-md flex justify-center items-center  rounded-xl text-center ">
                        <ClerkLoaded>

                            <SignIn path='/sign-in' />
                        </ClerkLoaded>
                        <ClerkLoading >
                            <Loader2 size={100} className='animate-spin text-primary-foreground text-center text-6xl' />
                        </ClerkLoading>
                    </div>
                </div>




                <div className="mt-8 flex items-center justify-center space-x-2 text-blue-100 text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Secure & Encrypted</span>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-blue-200 text-xs">
                &copy; 2025 Bimal Pandey - All rights reserved
            </div>
        </div>
    )
}