import React from 'react'
import { Links } from './links'
import Link from 'next/link'

function Footer() {


  return (
    <footer className='max-w-landing-page pt-16 pb-4 px-8 w-full text-primary-foreground grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
      {
        Links.map((link, index) => {
          return <section key={index} aria-label={link.name} className='flex flex-col gap-2'>
            <h2 className='text-xl font-semibold'>
              <Link href={link.link} aria-label={link.name}>
                {link.name}
              </Link>
            </h2>
            {link.lists.map((listLink, listIndex) => {
              return <Link href={listLink.link} key={listIndex} className=''> {listLink.name}</Link>
            })}
          </section>
        })
      }
      <section aria-label='Contact Us' className='flex flex-col gap-2' >
        <h2 className='text-xl font-semibold'>
          <Link href={"#"} aria-label={"Contact Us"}>
            Contact Us
          </Link>
        </h2>
        <Link href={"#"} className='text-orange-300'>Drop us a Line</Link> 
        <span>or let's stay in touch via :</span>
        <section aria-label='Social Links' className='flex flex-row gap-2'>
          <Link href={`https://www.facebook.com/ProWritingAid/`}>
            <img src="./fb.svg" alt="Facebook Link" />
          </Link>
          <Link href={`https://twitter.com/prowritingaid`}>
            <img src="./x.svg" alt="Twitter Link" />
          </Link>
          <Link href={`https://www.instagram.com/prowritingaid.insta/`}>
            <img src="./insta.svg" alt="Instagram Link" />
          </Link>
          <Link href={`https://www.youtube.com/channel/UClh8Sjuq-j17zxjfvvxmcIg`}>
            <img src="./youtube.svg" alt="Youtube Link" />
          </Link>
          <Link href={`https://www.linkedin.com/company/prowritingaid`}>
            <img src="./linkedin.svg" alt="Linkedin Link" />
          </Link>
        </section>
      </section>
    </footer>
  )
}

export default Footer