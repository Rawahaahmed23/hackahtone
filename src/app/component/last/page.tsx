import Image from "next/image";

import { Sign } from "crypto";

export default function Home() {

  return (

    <div className="h-full w-full mt-5">
      <div className="w-full h-full flex flex-row justify-center items-center mt-16">
      
        <div className="bg-white w-[50%] h-[41rem] p-16">
             <h1 className="text-[#2a254b] w-[60%] text-3xl leading-loose">
              The Future Brand For the
              Future,With Timeless Design
             </h1>

             <div className="mt-7">
             <p>
             When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                </p> 
                <br /> 
                <p>
                 
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores libero itaque deleniti ut quos? 
                </p>

              <div className="mt-32 text-white leading-8" >
              <button className=" h-16 text-white text-thin bg-[#494565] w-18 px-6 text-center hover:bg-[#6d6b7f] ease-in-out duration-300">
                View collection
              </button>
              </div>
             </div>
        </div>
        <div   className="w-[50%] h-[41rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/image4.jpg')",
          }} >
        
        </div>
      </div>
   
    </div>
  



  );
  
}
