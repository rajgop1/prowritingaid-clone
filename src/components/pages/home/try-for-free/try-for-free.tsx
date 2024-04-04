import { Button } from '@/components/ui/button'
import React from 'react'

function TryForFree() {
  return (
    <section className='w-full bg-gray-200 py-16 flex flex-col items-center gap-6'>
        <h2 className='text-4xl font-semibold text-primary-foreground'>Get the secret to better writing</h2>
        <Button className='px-8 py-6'>Try for free</Button>
    </section>
  )
}

export default TryForFree