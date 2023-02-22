import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import facebook from '../../assets/imgs/facebook.png'
import twitter from '../../assets/imgs/twitter.png'
import instagram from '../../assets/imgs/instagram.png'
import Logo from '../Logo/Logo'
import menu from '../../assets/imgs/menu.png'
import styles from './Navbar.module.css'

const Navbar = () => {
    const [path, setPath] = useState("");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuClicked(!isMenuClicked);
    }
    
    const location = useLocation();

    useEffect(()=>{
        setPath(location.pathname);
    }, [location])

    useEffect(()=>{
        setPath("/home");
    }, [])
    return (
        <>
            <div className='w-full flex justify-between p-5'>
                <Logo />
                <div className='flex items-center gap-16 text-md text-white font-semibold xl:hidden'>
                    <ul className='flex items-center gap-12'>
                        <Link to="/home"> <li className={path == "/home" ? "text-primary border-b-4 border-secondary py-2": ""}>HOME</li></Link>
                        <Link to="/about"> <li className={path == "/about" ? "text-primary border-b-4 border-secondary py-2": ""}>ABOUT</li></Link>
                        <Link to="/team"> <li className={path == "/team" ? "text-primary border-b-4 border-secondary py-2": ""}>TEAM</li></Link>
                        <Link to="/work"> <li className={path == "/work" ? "text-primary border-b-4 border-secondary py-2": ""}>WORK</li></Link>
                        <Link to="/prices"> <li className={path == "/prices" ? "text-primary border-b-4 border-secondary py-2": ""}>PRICES</li></Link>
                        <Link to="/blog"> <li className={path == "/blog" ? "text-primary border-b-4 border-secondary py-2": ""}>BLOG</li></Link>
                        <Link to="/contact-us"> <li className={path == "/contact-us" ? "text-primary border-b-4 border-secondary py-2": ""}>CONTACT US</li></Link>
                    </ul>

                    <ul className='flex gap-4'>
                        <li className='w-4 h-4'><img src={facebook} alt="facebook" className='w-full h-full'/></li>
                        <li className='w-4 h-4'><img src={twitter} alt="facebook" className='w-full h-full'/></li>
                        <li className='w-4 h-4'><img src={instagram} alt="facebook" className='w-full h-full'/></li>
                    </ul>    
                </div>
                {/* mobile menu toggle */}
                <button type='button' onClick={toggleMenu} className='hidden xl:block w-8 h-8'>
                    <img src={menu} className="w-full h-full" alt='hamburger menu' />
                </button>
                {/* mobile menu toggle */}
            </div>

            {/* mobile menu */}
            <div className={`${isMenuClicked ? "hidden xl:block" : "hidden"}`}>
                <div className={`${styles.centerAbs} absolute left-50 text-md text-white font-semibold bg-gray-700 w-full p-4`}>
                    <ul className='flex flex-col items-center gap-4'>
                        <Link to="/home"> <li className={path == "/home" ? "text-primary": ""}>HOME</li></Link>
                        <Link to="/about"> <li className={path == "/about" ? "text-primary": ""}>ABOUT</li></Link>
                        <Link to="/team"> <li className={path == "/team" ? "text-primary": ""}>TEAM</li></Link>
                        <Link to="/work"> <li className={path == "/work" ? "text-primary": ""}>WORK</li></Link>
                        <Link to="/prices"> <li className={path == "/prices" ? "text-primary": ""}>PRICES</li></Link>
                        <Link to="/blog"> <li className={path == "/blog" ? "text-primary": ""}>BLOG</li></Link>
                        <Link to="/contact-us"> <li className={path == "/contact-us" ? "text-primary": ""}>CONTACT US</li></Link>
                        <ul className='flex gap-4'>
                            <li className='w-4 h-4'><img src={facebook} alt="facebook" className='w-full h-full'/></li>
                            <li className='w-4 h-4'><img src={twitter} alt="facebook" className='w-full h-full'/></li>
                            <li className='w-4 h-4'><img src={instagram} alt="facebook" className='w-full h-full'/></li>
                        </ul>
                    </ul>  
                </div>  
            </div>
            {/* mobile menu */}
        </>
  )
}

export default Navbar