import Link from 'next/link'
import React from 'react'
import { Button } from '../../ui/button'



function Header() {
    return (
        <header className='py-4 max-w-landing-page w-full px-8'>
            <nav className='flex flex-row justify-between text-primary-foreground'>
                <Link href={"/"} aria-label="" className='flex flex-row gap-[10px] items-center font-semibold hidden-md hidden-sm hidden-xs'>
                    <img src="./logo.svg" alt="Pro Writing Aid Logo" />
                    <span className='text-xl'> ProWritingAid </span>
                </Link>
                <section>
                    <Link className='px-[12px] hover:text-gray-100 text-sm xl:text-base' href={"#"}>Features</Link>
                    <Link className='px-[12px] hover:text-gray-100 text-sm xl:text-base' href={"#"}>Reviews</Link>
                    <Link className='px-[12px] hover:text-gray-100 text-sm xl:text-base' href={"#"}>Pricing</Link>
                    <Link className='px-[12px] hover:text-gray-100 text-sm xl:text-base' href={"#"}>Use App</Link>
                    <Link className='px-[12px] hover:text-gray-100 text-sm xl:text-base' href={"#"}>Learn</Link>
                    <Link className='px-[12px] hover:text-gray-100 text-sm xl:text-base' href={"#"}>Log in</Link>
                    <Button variant={"orange"} className='font-medium'>Sign Up</Button>
                </section>
            </nav>
        </header>
    )
}

export default Header