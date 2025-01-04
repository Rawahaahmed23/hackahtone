export default function sigup(){
    return(
        <div >

            <div className="bg-gray-50 flex flex-col justify-center items-center h-full w-full mt-16 ">

            
          <div className="flex flex-col justify-center items-center mt-16 w-[90%] bg-white h-[70%] p-16">
            <h1 className="text-3xl font-bolder text-[#2a254b]">Join the Club and Get the benifit</h1>
            <div className="w-full sm:w-[300px] xl:w-[470px] mt-10">

            <p className="text-center">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
            </div>

            <div className="mt-16 flex flex-row justify-center">
            <input className="w-full lg-w[224px] xl:w-[354px] h-[56px] bg-gray-100 pl-4 placeholder:text-gray-400" type="text" placeholder="@your email" />
            <span><button className="bg-[#2A254B] text-white h-[56px] w-[118px]">Button</button></span>
            </div>
          </div>
          </div>
        </div>
    )
}