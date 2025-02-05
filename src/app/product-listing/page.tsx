import Navbar from "../component/Navbar-product/page"
import Product1 from "../component/product/page"
import Service1 from "../component/Service/page"
import Signup1 from "../component/siginup/page"
import Footer1 from "../component/footer-product/page"
import Link from "next/link"

export default function Product() {
  return (
    <div>
     
      <div className="w-full h-full flex flex-col justify-center items-center lg:flex-row">

        <div className="w-full xl:w-[50%] justify-center">
          <img className="w-full h-[49rem] object-cover" src="/img.jpeg" alt="" />

        </div>



        <div className="w-full p-10  lg:w-[50%] pt-[10rem] bg-gray-100">


          <div className="text-3xl text-[#2a254b]">
            <h1>The Dancy Chair</h1>
            <div>&pound;250</div>
          </div>



          <div className="mt-16 text-[#2a254b] text-[16px]  font-normal leading-[19px]" >
            Description
          </div>


          <div className="w-full mt-[19px]  font-normal lg:w-[498px] ">
            <p>
              A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p>
          </div>


          <div className="mt-[20px]  font-normal">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>

          </div>


          <div>
   

   {/* dimension-section  */}


        </div>
        <div className="mt-16">
        <h4>Dimensions</h4>



        {/* height  */}
        <div className="flex flex-row mx-auto lg:flex gap-[57px] mt-5 font-normal border-r-2pc border-black">
        <div>
         <h6>Height</h6>
         <div>110cm</div>
        </div>


        {/* width       */}
        <div>
        <h6>width</h6>
        <div>75cm</div>

        </div>




        {/* Depth  */}

        <div>
        <h6>Depth</h6>
        <div>50cm</div>
        </div>

        </div> {/* Height-width-depth main-div  */}
     {/* Amout-section  */}

     <div className="w-full flex flex-col lg:flex-row mt-10 lg:w-[90%]">
       <div className="hidden lg:block  mt-3 text-[#2a254b]">
         Amount
      
          
       </div>
       <div className=" mt-3 text-[#2a254b] lg:hidden">
         Quantity
      
          
       </div>
       <div className=" flex flex-row justify-center items-center w-full p-0 xl:w-[122px] bg-gray-100 lg:ml-5 bg-gray-200 flex justify-center">

 
        <span className="flex justify-evenly items-center ml-[20px] w-[122px] h-[46px] text-center pt-[10px]">
         <span className="">-</span>
         <span>1</span>
         <span>+</span>

        </span>

        </div>

       <div className="hidden lg:flex flex-row justify-end items-end w-full">
        <Link href={'/cart-item'}><button className="w-[143px] h-[56px] bg-[#2A254B] text-[16px] text-white">
        Add to Cart
        </button></Link>
       </div>

     </div>
    <Link href={'/cart-item'}> <div className="flex flex-row justify-center items-center w-full lg:hidden">
        <button className="w-full h-[56px] bg-[#2A254B] text-[16px] text-white">
        Add to Cart
        </button>
       </div></Link>

        </div>    {/* dimension-section end  */}

        </div>  {/*content box div  */}

      </div>  {/*fullbox div  */}


      <Product1 />
      <Service1 />
      <Signup1 />
      <Footer1 />

    </div>   // main-div 

     
  )
}