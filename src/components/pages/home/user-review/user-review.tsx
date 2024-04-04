import React from 'react'

function UserReview() {
    return (
        <section className='w-full py-16 px-8 flex flex-col gap-10 items-center bg-black-100 text-center'>
            <figure className='w-24 h-24 rounded-full overflow-hidden	'>
                <img className='w-full h-full object-cover' src="https://assets.prowritingaid.com/f/145420/402x400/d88ae5ebfd/talia-hibbert_product_review_headshot.JPG/m/" alt="Headshot of Talia Hibbert, USA Today and NY Times Bestselling Author "></img>
            </figure>
            <blockquote className='text-2xl text-white flex flex-col gap-6'>
                <p>“ When I started out... it was just me and ProWritingAid against the world basically. ”</p>
                <footer className='text-base'>—Talia Hibbert,USA Today Bestselling Author of  <cite>“Get a Life, Chloe Brown”</cite></footer>
            </blockquote>
        </section>
    )
}

export default UserReview