import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// type HeaderProps = {
//     children: React.ReactNode;
// }

// you can see the HeaderProps type declared at types/index.d.ts (d stands for declaration)
// ReactNote is any type of a value that can be displayed as a child of React component
// they are what header accepts 

const Header = ({children, className }: HeaderProps ) => {
  return (
    <div className={cn("header", className)}> 
    {/* // running className accepted as props when needed slash with the cn, from the Header components on root/app */}
        <Link href="/" className="md:flex-1">
            <Image 
                src="/assets/icons/logo.svg"
                alt="logo with name"
                width={120}
                height={32}
                className="hidden md:block"
            />
            <Image 
                src="/assets/icons/logo-icon.svg"
                alt="logo"
                width={32}
                height={32}
                className="mr-2 md:hidden"
            />
        </Link>
        {children}
    </div>
  )
}

export default Header