import Image from "next/image";
import Service from "./component/Service/page";
import Product from "./component/product/page";
import Popular from "./component/popular/page"
import Signup from "./component/siginup/page"
import Footer from "./component/footer/page";
import Last from "./component/last/page"
import { Sign } from "crypto";

export default function Home() {

  return (

    <div className="h-full w-full">
      <div className="w-full h-full flex flex-row justify-center items-center mt-16">
      
        <div className="bg-[#2a254b] w-[50%] h-[41rem] p-16">
             <h1 className="text-white w-[60%] text-3xl leading-loose">
              The Future Brand For the
              Future,With Timeless Design
             </h1>

             <div className="mt-7">
              <button className=" h-16 text-white text-thin bg-[#494565] w-18 px-6 text-center hover:bg-[#6d6b7f] ease-in-out duration-300">
                View collection
              </button>

              <div className="mt-32 text-white leading-8" >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores libero itaque deleniti ut quos? Sequi quod, veniam expedita cumque quibusdam ducimus aliquam eaque laborum voluptatem placeat pariatur odit mollitia nulla vel minus?
                </p>
              </div>
             </div>
        </div>
        <div   className="w-[28%] h-[41rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/image2.jpg')",
          }} >
        
        </div>
      </div>
      <Service />

      <Product />
      <Popular />
      <Signup />
      <Last />
      <Footer />
    </div>
  



  );
  
}
