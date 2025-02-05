import Link from "next/link";


export default function Footer() {
    return (
      <footer className="bg-[#2a254b] text-white py-8 border-b-2px md:mt-0 sm:mt-0  xl:mt-16 ">
        <div className="container grid grid-cols-2 gap-0 xl:flex  flex-wrap justify-between w-[70%] mx-16">
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="list-none">
              <li><a href="#" className="hover:text-gray-400">New arrivals</a></li>
              <li><a href="#" className="hover:text-gray-400">Best sellers</a></li>
              <li><a href="#" className="hover:text-gray-400">Recently viewed</a></li>
              <li><a href="#" className="hover:text-gray-400">Popular this week</a></li>
              <li><a href="#" className="hover:text-gray-400">All products</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 mb-4 md:mb-0">
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
          <div className="w-full lg:w-1/4 mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Our company</h4>
            <ul className="list-none">
             <Link href={'/aboutis'}> <li className="hover:text-gray-400">About us</li></Link>
              <li><a href="#" className="hover:text-gray-400">Vacancies</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact us</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-400">Returns policy</a></li>
            </ul>
          </div>
          <div className="lg:block hidden w-full md:w-1/4 ">
            <h4 className="text-lg font-bold mb-4">Join our mailing list</h4>
            <div className="flex w-[509px] h-[56px]">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#4a4666] border-none py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="bg-white hover:bg-blue-600 text-black py-2 px-4">Sign up</button>
            </div>
          </div>
        </div>








        <div className="w-full flex flex-col justify-center items-center lg:hidden block w-full ">
            <h4 className="text-lg font-bold mb-4">Join our mailing list</h4>
            <div className="flex w-[222px] h-[56px]">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#4a4666] border-none py-2 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <button className="bg-white hover:bg-blue-600 text-black py-2 px-3">Sign up</button>
            </div>
          </div>
        <div className="w-[90%] mx-auto flex justify-center  items-center border-t-2 border-t-purple-100  mt-8 gap-4 xl:mx-16 w-[90%]">
</div>
            <div>
            </div >
                <div className="flex flex-row justify-center items-center p-5 lg:justify-between w-[80%] mx-16">
                Copyright 2022 Avion LTD
                      
                <div className="hidden lg:flex flex-row gap-6">
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                    <div>icons</div>
                </div>
                </div>
          {/* Your footer content here, or you can leave it empty */}
      </footer>
    );
  }
  