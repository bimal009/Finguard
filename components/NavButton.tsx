import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type Props = {
    href: string;
    label: string;
    isActive?: boolean;
};

const NavButton = ({ href, label, isActive }: Props) => {
    return (
        <Link href={href} className="flex items-center">
            <Button
                variant="secondary"
                className={cn(
                    "text-white border-none px-3 py-2 h-auto text-sm md:text-base bg-transparent hover:text-white hover:bg-white/15 transition-all duration-200 outline-none ring-transparent focus:bg-white/10",
                    isActive ? "bg-white/10 text-white" : "bg-transparent"
                )}
            >
                {label}
            </Button>
        </Link>
    );
};

export default NavButton;