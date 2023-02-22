import React from 'react'

const FeatureComp = ({ img, text }) => {
  return (
    <div className='flex gap-2 items-center'>
        <div className='w-4 h-4'>
            <img src={img} alt='check' className='w-full h-full' />
        </div>
        
        <div className='text-sm'>
            {text}
        </div>
    </div>
    )
}

export default FeatureComp