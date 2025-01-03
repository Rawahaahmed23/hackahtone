import Navbar2 from "../component/Navbar-about/page"
import Last from "../component/last-about/page"
import Service3 from "../component/Service/page"
import Sigin3 from "../component/siginup/page"
import Product3 from "../component/footer-product/page"



export default function About(){
    return(
<div>


 {/* header-button  */}
 <div className="max-w-screen-2xl mx-auto">
    <div className=" w-full h-[277px]  flex flex-col justify-evenly items-center xl:flex-row ">
        <div>
            <h1 className="text-[36px]  w-full mx-auto p-5 lg:w-[704px] text-[25px]">A brand built on the love of craftmanship,
            quality and outstanding customer service</h1>
        </div>
        <div>
        <button className="px-8 py-3 bg-gray-200 text-[#2a254b] text-sm font-medium rounded hover:bg-gray-300">View collection</button>
        </div>
    </div>
         

{/* hero-section bottom  */}
<div className="flex flex-col justify-center items-center gap-5 lg:flex-row">


  <div className="bg-[#2A254B]  h-[478px] p-16 w-[90%] lg:w-[634px]">
    <div>
        <h1 className="text-white text-3xl leading-lose">It started with a small idea</h1>
        <p className="text-white mt-5">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>



        <div className="flex items-end justify-start mt-16 lg:mt-[11rem]">     
        <button className="w-full h-16 text-white text-thin bg-[#494565] text-center hover:bg-[#6d6b7f] ease-in-out duration-300 lg:w-44">
                View collection
       
              </button> </div>
    </div>
  </div>


  <div className="bg-black  h-[478px] overflow-hidden w-[90%] lg:w-[634px]">
  <img
    className="w-full h-full object-cover"
    src="/about.jpeg"
    alt=""
  />
</div>




  </div>

  <Last />
  <Service3 />
  <Sigin3 />

</div>
  <Product3 />

</div>

       
    )
}