
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
     <div className="wrapper">
        <nav className="flex h-16 w-full border-b-2"  >
        <div className="text-xl text-[#2a254b] m-5">Avion</div>
  
            <ul className="flex flex-row justify-center items-center w-[100%] gap-[40px] m">
                <li>Plant pots</li>
                <li>Ceramics</li>
                <li>Tables</li>
                <li>Chairs</li>
                <li>Crockery</li>
                <li>Tableware</li>
                <li>Cutlery</li>
            </ul>

            <div className="flex flex-row justify-end items-center gap-5 p-4">
     
                <div>Icons</div>
                <div>Icons</div>
                <div>Icons</div>
            </div>
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
  