
import Footer from "../component/footer/page"

export default function ShoppingCart() {
  return (
    <div>
      <div className="flex justify-center w-full min-h-screen px-4 lg:px-0">
        <div className="w-full lg:w-[70%] mt-16 lg:mt-20">
          <p className="text-2xl lg:text-[32px] font-normal">Your shopping cart</p>
          
          {/* Headers - Hide on Mobile */}
          <div className="hidden lg:flex justify-between w-full h-[25px] mt-14">
            <p className="text-base text-[#2A254B]">Product</p>
            <div className="w-[48%] h-full flex justify-between">
              <p className="w-[57px] h-full text-base text-[#2A254B]">Quantity</p>
              <p className="w-[34px] h-full text-base text-[#2A254B]">Total</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-full h-[2px] bg-[#EBE8F4] mt-2"></div>
          
          {/* First Product */}
          <div className="flex flex-col lg:flex-row lg:justify-between w-full mt-4">
            <div className="w-full lg:w-[309px]">
              <div className="flex gap-4">
                <img className="w-[133px] h-[166px] object-cover bg-[#F5F5F5]" src="/rich.jpeg" alt="Graystone vase" />
                <div className="flex flex-col flex-1">
                  <p className="text-lg font-normal text-[#2A254B]">Graystone vase</p>
                  <p className="text-sm mt-2 text-[#2A254B] font-normal">A timeless ceramic vase with a tri color grey glaze.</p>
                  <p className="text-lg mt-auto text-[#2A254B]">£85</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-between items-center w-full lg:w-[48%] mt-4 lg:mt-0">
              <input type="text" value="1" className="w-[56px] h-[40px] border border-[#CAC6DA] rounded px-4 text-center" />
              <p className="hidden lg:block text-lg text-[#2A254B]">£85</p>
            </div>
          </div>
          
          {/* Second Product */}
          <div className="flex flex-col lg:flex-row lg:justify-between w-full mt-8">
            <div className="w-full lg:w-[309px]">
              <div className="flex gap-4">
                <img className="w-[133px] h-[166px] object-cover bg-[#F5F5F5]" src="/poda.jpeg" alt="Basic white vase" />
                <div className="flex flex-col flex-1">
                  <p className="text-lg font-normal text-[#2A254B]">Basic white vase</p>
                  <p className="text-sm mt-2 text-[#2A254B] font-normal">Beautiful and simple this is one for the classics</p>
                  <p className="text-lg mt-auto text-[#2A254B]">£85</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-between items-center w-full lg:w-[48%] mt-4 lg:mt-0">
              <input type="text" value="1" className="w-[56px] h-[40px] border border-[#CAC6DA] rounded px-4 text-center" />
              <p className="hidden lg:block text-lg text-[#2A254B]">£85</p>
            </div>
          </div>
          
          <div className="w-full h-[2px] bg-[#EBE8F4] mt-8"></div>
          
          {/* Subtotal Section */}
          <div className="w-full mt-8">
            <div className="flex justify-end gap-2 text-lg text-[#2A254B]">
              <span>Subtotal</span>
              <span>£210</span>
            </div>
            <p className="text-sm text-[#2A254B] text-right mt-3">
              Taxes and shipping are calculated at checkout
            </p>
            <div className="flex justify-end mt-6">
              <button className="w-full lg:w-[172px] h-[56px] bg-[#2A254B] text-white hover:bg-opacity-90 transition-all">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}