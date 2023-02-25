import React from 'react'

const OfferComp = ({ img, title, text, color }) => {
  return (
    <>
      <div className={`bg-${color}-700 flex flex-col justify-center items-center gap-4`}>
        <div className='w-8 h-8'>
          <img src={img} alt='settings' className='w-full h-full' />
        </div>
        <div className='font-semibold'>{ title }</div>
        <div className='text-center w-[20rem] md_lg:w-[20rem]'>{ text }</div>
      </div>
    </>
  )
}

export default OfferComp