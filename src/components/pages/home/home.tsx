import React from 'react'
import Hero from './hero/hero'
import TryForFree from './try-for-free/try-for-free'
import MakesWritingBetter from './makes-writing-better/makes-writing-better'
import UserReview from './user-review/user-review'

function HomeComponent() {
  return (
    <>
        <Hero/>
        <MakesWritingBetter/>
        <UserReview/>
        <TryForFree/>
    </>
  )
}

export default HomeComponent