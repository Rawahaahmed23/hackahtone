export default function () {
    return (
      <div>
        {/* Header */}
        <div className="flex flex-row items-center h-16 px-5 border-b-2 justify-between">
          {/* Logo */}
          <div className="text-xl text-[#2a254b]">Avion</div>
  
          {/* Icons for Desktop */}
          <div className="hidden md:flex flex-row items-center gap-4">
            <div>Search Icon</div>
            <div>Burger Icon</div>
          </div>
  
          {/* Icons for Mobile */}
          <div className="flex md:hidden flex-row items-center gap-4">
            <div>Search Icon</div>
            <div>Burger Icon</div>
          </div>
        </div>
  
        {/* Navigation */}
        <nav className="flex flex-row justify-center items-center py-5 h-16">
          <ul className="flex flex-wrap justify-center md:justify-between items-center gap-5 md:gap-[50px] text-center">
            <li>Home</li>
            <li>Ceramics</li>
            <li>Chairs</li>
            <li>Crockery</li>
            <li>Tableware</li>
            <li>Cutlery</li>
          </ul>
        </nav>
      </div>
    );
  }
  