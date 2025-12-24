const Topbar = () => {
  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/NgLwPBJ2/pic7.png"
            alt="SI Technocrats"
            className="h-20"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="#" className="text-teal-500 border-b-2 border-teal-500 pb-1">
            Home
          </a>

          <div className="flex items-center gap-1 cursor-pointer hover:text-teal-500">
            Our Service
            <span>▾</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-teal-500">
            Product
            <span>▾</span>
          </div>

          <a href="#" className="hover:text-teal-500">
            About
          </a>
        </nav>

        <button className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 transition">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Topbar;
