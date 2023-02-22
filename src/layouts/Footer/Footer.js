import React from 'react'
import styles from './Footer.module.css'
import fb from '../../assets/imgs/fb.png'
import tw from '../../assets/imgs/tw.png'

const Footer = () => {
  return (
    <div className="w-full" style={styles}>
      <div className='bg-footerBg bg-opacity-50 p-24'>
        <div className='flex justify-evenly items-center w-full h-full xl:flex-col'>
          <div className='w-1/3 flex flex-col gap-14 xl:items-center'>
            <h1 className='text-footertxt font-bold tracking-widest'>SUBSCRIBE</h1>
            <div className='text-footertxt tracking-wide w-[10rem]'>Exciting things ahead,<br></br> stay tuned for more information.</div>
            <div className='flex flex-col gap-4'>
              <div>
                <form className='flex gap-4 md700:flex-col'>
                  <input
                    placeholder='Enter Your Email Adress'
                    className='w-96 placeholder-footertxt text-footertxt border-2 border-footertxt px-4 py-2 bg-footerBg bg-opacity-40 focus:outline-none md700:w-60'
                  />
                  <button
                    type='button'
                    className='xxl:w-[6rem] px-6 py-2 bg-tertiary border-2 border-footertxt text-footertxt font-extrabold' >
                      OK
                  </button>
                </form>
              </div>
              <div className='flex items-center gap-2 xxl:hidden'>
                <div className=''>
                  <label>
                    <input type='checkbox' />
                    <span></span>
                  </label>
                </div>
                <h1 className='text-footertxt'>I agree to receive news and updates</h1>
              </div>
            </div>
          </div>

          <div className='self-start w-1/3 xxl:self-center xl:flex xl:flex-col xl:items-center'>
            <div>
              <h1 className='text-footertxt font-bold tracking-widest xxl:mt-16 w-96 xxl:text-center'>FIND YOUR WAY</h1>
            </div>
            <div className='flex gap-16 mt-8 text-footertxt'>
              <div className='flex flex-col gap-4'>
                <div>Home</div>
                <div>What is BIZONE?</div>
                <div>More About BizOne!</div>
              </div>

              <div className='flex flex-col gap-4'>
                <div>BizOne ++</div>
                <div>BizOne Today</div>
                <div>Help !</div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center'>
          <div className='w-[85.4rem] h-0.5 bg-footertxt mt-16'></div>
        </div>
        <div className='flex justify-around text-footertxt mt-3 xxl:flex-col xxl:text-center'>
          <div className='tracking-widest'>© Proudly Created With <span className='font-bold'>test.com.</span> Designed by<span className='font-bold'>TEST</span></div>
          <div className='tracking-widest'>test@test.com</div>
          <div className='flex gap-3 xxl:hidden'>
            <div className='w-5 h-5'>
              <img src={fb} alt='fb' className='w-full h-full'/>
            </div>

            <div className='w-6 h-6'>
              <img src={tw} alt='tw' className='w-full h-full'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer