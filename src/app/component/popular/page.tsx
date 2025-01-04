export default function Product(){
    return(
    <div>

        <div className="w-full h-23rem p-28 mt-16">

     
    <h1 className="flex justify-start text-3xl">
       Most Popular Product
    </h1>
    <div className="flex flex-col xl:flex-row justify-center items-center gap-[23px] mt-16">


    <div className="w-[43rem] hidden lg:block"> {/* Hide on small screens and show on large screens */}
         <img src="/sofa.jpeg" alt="" />
      
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
        
    </div>  
    
    
    <div className="w-[19rem]">
         <img src="/image1.jpg" alt="" />
      
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
        
    </div>  
   
    <div className="w-[19rem]">
         <img src="/image1.jpg" alt="" />
      
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
        
    </div>
      
        
    </div>
    <div className="mt-12 flex justify-center">
                <button className="px-8 py-3 bg-gray-200 text-[#2a254b] text-sm font-medium rounded hover:bg-gray-300">View collection</button>
            </div>
    </div>
    </div>
    )
}
