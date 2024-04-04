import React from 'react'

function MakesWritingBetter() {
    return (
        <section className='max-w-landing-page w-full py-16 px-8 text-black-100 flex flex-col-reverse xl:flex-row gap-24 justify-center items-center'>
            <img className='flex-1' srcSet="https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/274x200/ 274w,https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/335x244/ 335w,https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/400x291/ 400w,https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/518x377/ 518w,https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/548x400/ 548w,https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/670x488/ 670w,https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/800x582/ 800w,https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/1036x754/ 1036w" sizes="(max-width: 480px) 400px,600px" src="https://assets.prowritingaid.com/f/145420/1080x788/6ce8ce8986/image1.png/m/" alt="headshot-content-w-image-fear-1x"></img>
            <section className='flex-1 flex flex-col gap-4' aria-labelledby='makes-writing-better'>
                <h2 id="makes-writing-better" className='text-xl lg:text-2xl font-semibold'>Do you feel like your writing lets you down?</h2>
                <p className='text-sm lg:text-base'>
                    We know what it’s like to have an amazing story concept but struggle to bring it to life. It’s frustrating when you can’t get your writing to do your ideas justice.
                </p>
            </section>
        </section>
    )
}

export default MakesWritingBetter