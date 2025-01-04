export default function Footer() {
    return (
      <footer className="bg-[#2a254b] text-white py-8 mt-16 border-b-2px">
        <div className="container grid grid-cols-2 mx-10 gap-5  lg:flex  justify-between w-[70%] mx-16">
          <div className="w-full lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-400">New arrivals</a></li>
              <li><a href="#" className="hover:text-gray-400">Best sellers</a></li>
              <li><a href="#" className="hover:text-gray-400">Recently viewed</a></li>
              <li><a href="#" className="hover:text-gray-400">Popular this week</a></li>
              <li><a href="#" className="hover:text-gray-400">All products</a></li>
            </ul>
            
          </div>
        <div>
        <h4 className="text-lg font-bold mb-4">Menu</h4>
        <div className="grid grid-cols-3 lg:flex flex-row w-full gap-[20px] mb-4">
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                </div>
                </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Categories</h4>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-400">Crockery</a></li>
              <li><a href="#" className="hover:text-gray-400">Furniture</a></li>
              <li><a href="#" className="hover:text-gray-400">Homeware</a></li>
              <li><a href="#" className="hover:text-gray-400">Plant pots</a></li>
              <li><a href="#" className="hover:text-gray-400">Chairs</a></li>
              <li><a href="#" className="hover:text-gray-400">Crockery</a></li>
            </ul>
          </div>
          <div className=" mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Our company</h4>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-400">About us</a></li>
              <li><a href="#" className="hover:text-gray-400">Vacancies</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-400">Returns policy</a></li>
            </ul>
          </div>



        
        </div>
        <div className="flex justify-center w-[90%] items-center border-t-2 broder[#4E4D93] mt-8 gap-4 mx-5 lg:mx-16">
</div>
            <div>
            </div >
                <div className="mt-10 flex flex-row justify-between w-[80%] mx-16">
                Copyright 2022 Avion LTD
                      
             
                </div>
          {/* Your footer content here, or you can leave it empty */}
      </footer>
    );
  }
  