import Link from "next/link";
import React from "react";
import Navbar1 from "../component/Navbar/page"
import Allproduct from "../component/Allproduct/page"
import  Footer from "../component/footer/page"

export default function Navbar() {
  return (
    <div>
        
    <div className="w-full h-[1400px]">
      <div className="w-full h-[209px] relative">
        <img className="w-full h-full object-cover" src="/lambi.jpeg" alt="half" />
        <p className="absolute top-10 left-10 ml-16 text-white text-4xl mt-24 ">All Products</p>
      </div>

      <div className="flex flex-row justify-center items-center gap-16 mt-5 lg:hidden">
      <button className="w-[172px] h-[56px] bg-[#F9F9F9] text-[16px] text-[#2A254B] hover:bg-opacity-90 transition-all">
                Filters <span className="fa-solid fa-caret-down"></span>
              </button>
              
               <button className="w-[172px] h-[56px] bg-[#F9F9F9] text-[16px] text-[#2A254B] hover:bg-opacity-90 transition-all">
                Sorting
              </button>
      </div>
        <div className="hidden lg:flex justify-between w-full h-[64px]  ">
        <div className="w-[558px] h-full ">
            <button className="w-[137px] h-full">Category<i className=" ml-2 fa-solid fa-caret-down"></i></button>
            <button className="w-[162px] h-full">Product type<i className=" ml-2 fa-solid fa-caret-down"></i></button>
            <button className="w-[108px] h-full">Price<i className=" ml-2 fa-solid fa-caret-down"></i></button>
            <button className="w-[114px] h-full">Brand<i className=" ml-2 fa-solid fa-caret-down"></i></button>
        </div>

        <div className="flex w-[238px] h-full ">
        <button className="w-[100px] text-sm h-full">Sorting by:</button>
        <button className="w-[154px] h-full">Date added<i className=" ml-2 fa-solid fa-caret-down"></i></button>
        </div>
      </div>

     
      <Allproduct />
      

<Footer />


    </div>
    </div>
  );
}
