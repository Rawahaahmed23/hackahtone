import Link  from "next/link";


export default function Navbar() {
    return (
      <div>
        {/* Header */}
        <div className="flex flex-row items-center h-16 px-5 border-b-2 justify-between">
          {/* Logo */}
          <div className=" text-xl text-[#2a254b] items-center justify-center">Avion</div>
  
          {/* Icons for Desktop */}
          {/* Icons for Mobile */}
          <div className="flex  flex-row items-center justfy-end gap-4">
          
          <div className="flex  flex-row items-center justfy-end gap-10 list-none mr-[32px]">
          <li>About us</li>
            <li>Contact</li>
            <li>Blog</li>
          
          </div>
            
            <div>Search Icon</div>
            <div>Burger Icon</div>
          </div>
        </div>
  
        {/* Navigation */}
        <nav className="flex flex-row justify-center items-center py-5 h-16 bg-[#F9F9F9]">
          <ul className="flex flex-wrap justify-center md:justify-between items-center gap-5 md:gap-[50px] text-center">
            <li>Home</li>
            <Link href={"/product-listing"}><li>Ceramics</li></Link>
           <Link href={"/aboutus"}> <li>Chairs</li></Link>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
          </ul>
        </nav>
      </div>
    );
  }
  