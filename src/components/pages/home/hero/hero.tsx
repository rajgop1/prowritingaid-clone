import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
    return (
        <section className='max-w-landing-page w-full py-[80px] px-8 flex flex-row justify-between items-center gap-[20px]'>
            <section className='flex flex-col gap-[20px]'>
                <h1 className='text-6xl text-primary-foreground font-semibold'>Publish without self-doubt</h1>
                <p className='text-xl text-black-200'>AI-powered tools and reports to help you write with confidence</p>
                <div className='flex flex-row gap-[20px]'>
                    <Button className='px-8 py-6'>
                        <span className='text-base'>
                            Get Started
                        </span>
                        <span className='text-sm opacity-[0.75]'>
                            &nbsp; &mdash; it's free
                        </span>
                    </Button>
                    <Button variant={"outline"} className='px-8 py-6 font-medium'>
                        Purchase
                    </Button>
                </div>
            </section>
            <section>
                <img srcSet="https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/342x250/ 342w,https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/400x292/ 400w,https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/540x395/ 540w,https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/750x545/ 750w,https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/684x500/ 684w,https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/800x584/ 800w,https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/1080x790/ 1080w,https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/1500x1090/ 1500w" sizes="(max-width: 992px) 100vw,540px" src="https://assets.prowritingaid.com/f/145420/1096x800/b8c0377c98/hero_creativewriting_icpexperiments.png/m/" alt="A hero of the creative writing feature page" />
            </section>
        </section>
    )
}

export default Hero