import React from 'react'
import OfferComp from './OfferComp/OfferComp'
import settings from '../../assets/imgs/settings.png'
import umbrella from '../../assets/imgs/umbrella.png'
import clock from '../../assets/imgs/clock.png'
import idea from '../../assets/imgs/idea.png'
import responsive from '../../assets/imgs/responsive.png'
import world from '../../assets/imgs/world.png'

const Offer = () => {
  return (
    <>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <h1 className='text-sm'>Our Valued Services</h1>
          <h1 className='text-3xl font-medium tracking-wide'>What we offer</h1>
        </div>
        <div className='flex flex-wrap gap-y-16 mt-20 mx-20'>
          <OfferComp img={settings} title="Unlimited Features" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <OfferComp img={umbrella} title="Creative Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <OfferComp img={clock} title="Responsive Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <OfferComp img={idea} title="Responsive Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <OfferComp img={responsive} title="Responsive Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
          <OfferComp img={world} title="Responsive Design" text="keep away from people who try to belittle your ambitions. Small people always do that but the really great." />
        </div>
    </>
  )
}

export default Offer