

export default function Home() {

  return (

    <div className="h-full w-full mt-5">
      <div className="w-full h-full flex justify-center items-center mt-16 flex-col lg:flex-row ">
      

      <div   className=" h-[41rem] bg-cover bg-center w-full lg:w-[50%]"
          style={{
            backgroundImage: "url('/last.jpeg')",
          }} >
        
        </div>


        <div className="bg-[#F9F9F9]  h-[41rem] p-16 w-full xl:w-[50%]">
             <h1 className="text-[#2a254b] w-[80%]  leading-loose sm:text-[18px] md:text-[24px]">
             Our service isn’t just personal, it’s actually
             hyper personally exquisite
             </h1>

             <div className="mt-7">
             <p>
             When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market
                </p> 
                <br /> 
                <p>
                 
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community. 
                </p>

              <div className="mt-10 text-white leading-8 lg:mt-32" >
              <button className=" h-16 text-black text-thin bg-white w-18 px-6 text-center">
                Get in touch
              </button>
              </div>
             </div>
        </div>
     
      </div>
   
    </div>
  



  );
  
}
