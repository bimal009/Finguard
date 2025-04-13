import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeaderLogo = () => {
    return (
        <div className=' gap-1 items-center hidden lg:flex'>

            <Link href="/">
                <Image className='object-contain' src="/logo.svg" alt='logo' height={40} width={40} />
            </Link>
            <p className='font-medium text-white text-xl'>FinGuard</p>
        </div>
    )
}

export default HeaderLogo