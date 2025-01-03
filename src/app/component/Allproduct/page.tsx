export default function ProductGrid() {
    return (
      <div>
        <div className="w-8/12 grid grid-cols-2 lg:grid-cols-4 gap-[23px] mt-16 mx-auto ">
          <div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src="/image2.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
          </div>
          
          <div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src="/guldan.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
          </div>  


          <div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src="/guldan.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
          </div> 


          <div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src="/guldan.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
          </div> 

             <div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src="/guldan.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
          </div>
          

          <div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src="/guldan.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
          </div>

          <div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src="/223.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
          </div>
          
          <div>
            <div className="aspect-[3/4] w-full overflow-hidden">
              <img src="/rich.jpeg" alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl my-3 text-[#2a254b] font-light">The Dandy chair</h3>
            <h4 className="font-medium">&pound; 250</h4>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-3 bg-gray-200 text-[#2a254b] text-sm font-medium rounded hover:bg-gray-300">
            View collection
          </button>
        </div>
      </div>
    )
  }