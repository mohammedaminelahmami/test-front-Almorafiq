import React from 'react'
import image3 from '../../assets/imgs/image3.png'
import check from '../../assets/imgs/check.png'
import FeatureComp from './FeatureComp/FeatureComp'

const Features = () => {
  return (
    <div className='flex justify-around gap-36 xl:gap-16 xl:flex-wrap'>
        <div className='w-1/2'>
            <img src={image3} alt='image' />
        </div>

        <div className='flex flex-col justify-center gap-8 w-1/2 xl:items-center'>
          <div>
            <h1 className='text-xl font-semibold'>Unique Experience</h1>
          </div>

          <div>
            <h1 className='w-[38rem] xl:w-[20rem] md700:w-[15rem] md700:text-sm'>
              we have a number of different teams within our agency that specialise in different areas of business so you can be sure that you won't receive a generic service and although we can't boast years and years of service we can ensure you that is a good thing in this industry.
            </h1>
          </div>

          <div>
            <div className=''>
              <h1 className='text-xl font-semibold'>
                Features
              </h1>

              <div className='flex gap-32 p-4 xl:justify-center xl:flex-col xl:gap-8'>
                <div className='flex flex-col gap-4'>
                  <FeatureComp text="Graphic Design" img={check} />
                  <FeatureComp text="Mobile Development" img={check} />
                  <FeatureComp text="Mobile Development" img={check} />
                  <FeatureComp text="Graphic Design" img={check} />
                </div>

                <div className='flex flex-col gap-4'>
                  <FeatureComp text="Website Designing" img={check} />
                  <FeatureComp text="Graphic Design" img={check} />
                  <FeatureComp text="Wordpress Theme" img={check} />
                  <FeatureComp text="Graphic Design" img={check} />
                </div>                     
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Features