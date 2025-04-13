"use client"
import React, { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import NavButton from './NavButton'
import { useMedia } from "react-use"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription
} from './ui/sheet'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


const Routes = [
    { href: "/", label: "Dashboard" },
    { href: "/transactions", label: "Transactions" },
    { href: "/accounts", label: "Accounts" },
    { href: "/categories", label: "Categories" },
    { href: "/settings", label: "Settings" },
]

const Navigation = () => {
    const pathName = usePathname();
    const [isOpened, setIsOpened] = useState(false);
    const router = useRouter();
    const isMobile = useMedia("(max-width:1024px)", false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpened(false);
    };

    if (isMobile) {
        return (
            <Sheet open={isOpened} onOpenChange={setIsOpened}>
                <SheetTrigger asChild>
                    <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-none bg-white/20 hover:text-white hover:bg-white/15 transition-all duration-200"
                    >
                        <Menu size={24} />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-blue-500 text-white">
                    <SheetTitle className="text-white sr-only">
                        Navigation Menu
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                        Application navigation links
                    </SheetDescription>
                    <div className="flex items-center ml-2 gap-2 mt-3">
                        <Link href="/">
                            <Image className="object-contain" src="/logo.svg" alt="logo" height={40} width={40} />
                        </Link>
                        <p className="font-medium text-white text-xl">FinGuard</p>
                    </div>
                    <nav className="flex flex-col space-y-4 mt-3">
                        {Routes.map((route, index) => (
                            <Button
                                key={index}
                                variant={pathName === route.href ? "link" : "ghost"}
                                className={`justify-start ${pathName === route.href ? 'text-white font-medium' : 'text-white/80'}`}
                                onClick={() => onClick(route.href)}
                            >
                                {route.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <>

            <nav className="hidden lg:flex items-center gap-x-5">
                {Routes.map((route, index) => (
                    <NavButton
                        key={index}
                        href={route.href}
                        label={route.label}
                        isActive={pathName === route.href}
                    />
                ))}
            </nav>

        </>
    );
};

export default Navigation;