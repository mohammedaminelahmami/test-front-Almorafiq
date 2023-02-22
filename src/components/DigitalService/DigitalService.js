import React from 'react'
import styles from './DigitalService.module.css'


const DigitalService = () => {
  return (
    <div>
        <div className='absolute -z-50 w-full h-[30rem]'>
            <div className={styles.background2}></div>
        </div>
        <div className='flex flex-col gap-8 justify-center items-center text-white'>
            <h1 className='mt-44'>
                Unleach your creative potential with BizOne
            </h1>

            <h1 className='text-4xl'>
                Looking For Exculsive Digital Services?
            </h1>
          <button
            type='button'
            className='bg-secondary text-white font-medium rounded-sm w-36 h-10'>
            Let's Talk
          </button>
        </div>
    </div>
  )
}

export default DigitalService