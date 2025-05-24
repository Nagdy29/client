import React, { useEffect, useState } from 'react'
import img from "../../assets/logo.svg"
import { MdOutlineLibraryBooks } from "react-icons/md";

import {
  Link,
  useLocation,
  useNavigate
} from "react-router-dom";
import { useClerk, useUser , UserButton } from "@clerk/clerk-react";

const NavvvDas = () => {
   const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experince', path: '/' },
        { name: 'About', path: '/' },
    ];

    const ref = React.useRef(null)

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
     const {openSignIn} = useClerk()
    const {user} = useUser()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(location.pathname !== "/"){
            setIsScrolled(true)
            return
        }else{
            setIsScrolled(false)
        }
        setIsScrolled(prev => location.pathname !== "/" ? true : prev  )
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div>
          <nav className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src={img} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
                </Link>

                {/* Desktop Nav
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                      Dashboard
                    </button>
                </div> */}

                {/* Desktop Right */}

                {
                    user ? ( <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label='My Bookings' onClick={()=> navigate("/booking") } labelIcon={ <MdOutlineLibraryBooks/> } />
                        </UserButton.MenuItems>
                    </UserButton> )
                    :(
                <div className="hidden md:flex items-center gap-4">
                    <svg className={`h-6 w-6 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                        Login
                    </button>
                </div>)
                }




                {/* Mobile Menu Button */}
         
        
            </nav>
    </div>
  )
}

export default NavvvDas
