

export default function Home() {

  return (

    <div className="h-full w-full mt-5">
    <div className="flex flex-col  xl:flex-row w-full h-full justify-center items-center mt-16">
      
    <div className="w-full  xl:w-[50%] h-[41rem] p-10 xl:bg-white">
             <h1 className="w-full text-[#2a254b] text-2xl xl:text-[#2a254b] w-[60%] text-3xl leading-loose">
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

              <div className=" mt-5 text-white leading-8 xl:mt-32 " >
              <button className=" h-16 text-white text-thin bg-[#494565] w-18 px-6 text-center hover:bg-[#6d6b7f] ease-in-out duration-300">
                View collection
              </button>
              </div>
             </div>
        </div>
        <div   className="w-full xl:w-[50%] h-[41rem] bg-cover bg-center"
          style={{
            backgroundImage: "url('/last3.jpeg')",
          }} >
        
        </div>
      </div>
   
    </div>
  



  );
  
}
