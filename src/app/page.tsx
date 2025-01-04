
import '@fortawesome/fontawesome-svg-core/styles.css';

import Service from "./component/Service/page";
import Product from "./component/product/page";
import Popular from "./component/popular/page"
import Signup from "./component/siginup/page"



import Footer from "./component/footer/page";
import Last from "./component/last/page"



export default function Home() {

  return (
    <div>
 
    <div className="max-w-screen-2xl mx-auto">
   
      <div className="w-full h-full flex flex-row justify-center items-center mt-16">
      
      <div className="w-full bg-[#2a254b] lg:w-[40%] h-[41rem] flex flex-col justify-center items-center p-10 xs: bg-[#2a254b] lg:bg-[#2a254b]">

             <h1 className="text-white w-full text-3xl leading-loose  xl:text-white w-[60%] text-3xl leading-loose">
              The Future Brand For the Future,With Timeless Design
             </h1>

           <div className="flex justify-start items-center w-full mt-7 xl:mt-7 w-[30%] ">
           <button className="hidden lg:block lg:w-44 h-16 text-white font-thin bg-[#494565] text-center hover:bg-[#6d6b7f] ease-in-out duration-300">
  View collection
</button>
              </div>
              <div className="mt-5 lg:mt-32 text-white leading-8" >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores libero itaque deleniti ut quos? Sequi quod, veniam expedita cumque quibusdam ducimus aliquam eaque laborum voluptatem placeat pariatur odit mollitia nulla vel minus?
                </p>

              </div>
          <button className="mt-16 w-44 h-16 text-white text-thin bg-[#494565] text-center hover:bg-[#6d6b7f] ease-in-out duration-300 lg:hidden" >
                View collection
              </button>
        </div>
        <div   className=" lg:w-[28%] h-[41rem] bg-cover bg-center"
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
    </div>
      <Footer />
  
    </div>


  );
  
}

