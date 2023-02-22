import React from 'react'

const OfferComp = ({ img, title, text }) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-4 w-1/3'>
        <div className='w-8 h-8'>
          <img src={img} alt='settings' className='w-full h-full' />
        </div>
        <div className='font-semibold'>{ title }</div>
        <div className='text-center w-1/2'>{ text }</div>
      </div>
    </>
  )
}

export default OfferComp