import React from 'react'

const Logo = () => {
  return (
        <div className='flex gap-0.5 w-36'>
            <span className='text-white text-4xl'>BizOne</span>
            <span className="xl:hidden w-2 h-2 bg-secondary rounded-full self-end mb-3"></span>
            <span className="hidden xl:block w-2 h-2 bg-secondary rounded-full mt-6"></span>
        </div>
    )
}

export default Logo