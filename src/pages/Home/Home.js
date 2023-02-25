import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Offer from '../../components/Offer/Offer'
import DigitalService from '../../components/DigitalService/DigitalService'
import Features from '../../components/Features/Features'
import Footer from '../../layouts/Footer/Footer'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <Navbar />
        <div className='absolute w-full -z-50' style={{ height: 900 }}>
          <div className='absolute w-full h-full bg-black opacity-50'></div>
          <div className={styles.image}></div>
        </div>

        <div className='w-full mt-48 flex flex-col gap-2 text-white xl:items-center p-5'>
          <div className='text-xl font-normal md_lg:text-center'>
            Quickly setup your website
          </div>

          <div className='w-[30rem] text-[3rem] font-medium xxl:text-[2rem] md:w-[20rem] xl:text-center'>
            Style up Your
            Business Strategy
          </div>

          <div className='text-xl font-normal xl:text-center'>
            it has all unique & new digital experience layouts
          </div>
        </div>

        <div className='w-full flex gap-4 mt-28 xl:justify-center p-5'>
          <button
            type='button'
            className='bg-secondary text-white font-medium rounded-sm w-36 h-10'>
            Read More
          </button>

          <button
            type='button'
            className='bg-primary text-white font-medium rounded-sm w-36 h-10'>
            Buy BizOne
          </button>
        </div>
      </div>
      <div className='mt-52'>
        <Offer />
      </div>

      <div className='mt-44'>
        <DigitalService />
      </div>

      <div className='container mx-auto mt-72 xxl:mt-64 xl:mt-52 sm:mt-24'>
        <Features />
      </div>

      <div className='mt-44'>
        <Footer />
      </div>
    </div>
  )
}

export default Home