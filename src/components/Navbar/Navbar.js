import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../assets/imgs/facebook.png'
import twitter from '../../assets/imgs/twitter.png'
import instagram from '../../assets/imgs/instagram.png'
import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <>
        <div className='w-full flex justify-between p-5'>
            <Logo />
            <div className='flex items-center gap-16 text-md text-white font-semibold'>
                <ul className='flex items-center gap-12'>
                    <Link to="/home"> <li className='text-primary border-b-4 border-secondary py-2'>HOME</li></Link>
                    <Link to="/about"> <li>ABOUT</li></Link>
                    <Link to="/team"> <li>TEAM</li></Link>
                    <Link to="/work"> <li>WORK</li></Link>
                    <Link to="/prices"> <li>PRICES</li></Link>
                    <Link to="/blog"> <li>BLOG</li></Link>
                    <Link to="/contact-us"> <li>CONTACT US</li></Link>
                </ul>

                <ul className='flex gap-4'>
                    <Link to="/facebook/mohammed-amine/7536HJD">
                        <li className='w-4 h-4'><img src={facebook} alt="facebook" className='w-full h-full'/></li>
                    </Link>
                    <Link to="/twitter/mohammed-amine/7536HJD">
                        <li className='w-4 h-4'><img src={twitter} alt="facebook" className='w-full h-full'/></li>
                    </Link>
                    <Link to="/instagram/mohammed-amine/7536HJD">
                        <li className='w-4 h-4'><img src={instagram} alt="facebook" className='w-full h-full'/></li>
                    </Link>
                </ul>    
            </div>    
        </div>  
    </>
  )
}

export default Navbar