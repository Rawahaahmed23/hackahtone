"use client"

import Link  from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBurger } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"; // Import Framer Motion

import { useState } from "react";


export default function Navbar() {

const [isClick , setisClick] = useState(false)

const toggleNavbar= (): void =>{
  setisClick(!isClick)
}
    return (
      

      
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <div className="flex flex-row items-center h-16 px-5 border-b-2 justify-between">
          {/* Logo */}
          <div>icon</div>
          <div className=" text-xl text-[#2a254b] items-center justify-center">Avion</div>
  
          {/* Icons for Desktop */}
          
  
          {/* Icons for Mobile */}
          <div className="flex  flex-row items-center justfy-end gap-4">
            <div>Search Icon</div>
            <div className=" hidden md:block">Profie Icon</div>
            <div className="block md:hidden" onClick={toggleNavbar} ><FontAwesomeIcon icon={faBars} className="text-3xl"/></div>
          </div>
        </div>
  
        {/* Navigation */}
        <nav className="flex flex-row justify-center items-center py-5 h-16">
          <ul className="hidden  md:flex flex-wrap  items-center gap-[50px] text-center ">
            <li>Home</li>
            <Link href={"/product-listing"}><li>Ceramics</li></Link>
           <Link href={"/aboutus"}> <li>Chairs</li></Link>
            <Link href={"/cart-item"}> <li>Crockery</li></Link>
            <Link href={"/All"}> <li>Tableware</li></Link>
            
          
            <li>Cutlery</li>
          </ul>
        </nav>
        
        {isClick &&(
           <motion.div
           className="fixed inset-0 bg-black h-[23rem] w-full bg-opacity-75 z-50"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.3 }}
         >
           <motion.nav
             className="py-5 h-full w-full bg-black text-white"
             initial={{ y: "-100%" }} // Start off-screen from the top (move up)
             animate={{ y: 0 }} // Slide down to 0 position (visible)
             exit={{ y: "-100%" }} // Slide out to the top again when closing
             transition={{ type: "spring", stiffness: 300, damping: 30 }}
           >
       <div>
        
       <nav className=" py-5 h-[32rem] w-full bg-black absolute top-0">
       <div className=" text-white absolute right-10 md:hidden" onClick={toggleNavbar} ><FontAwesomeIcon icon={faBars} className="text-3xl text-white"/></div>
       <ul className="my-4 items-center flex flex-col text-lg  md:flex flex-wrap  items-center gap-[50px] text-center text-white ">
         <li>Home</li>
         <Link href={"/product-listing"}><li>Ceramics</li></Link>
        <Link href={"/aboutus"}> <li>Chairs</li></Link>
         <Link href={"/cart-item"}> <li>Crockery</li></Link>
         <Link href={"/All"}> <li>Tableware</li></Link>
         
       
         <li>Cutlery</li>
       </ul>
     </nav>
     </div>
       </motion.nav>
       </motion.div>
          
        )}
      </div>
       

    );
  }
  