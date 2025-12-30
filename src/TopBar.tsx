import { Link } from "react-router-dom";

const TopBar = () => {
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

          <Link
            to="/"
            className="text-teal-500 border-b-2 border-teal-500 pb-1"
          >
            Home
          </Link>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-teal-500">
              Our Service
              <span className="transition-transform group-hover:rotate-180">
                ▾
              </span>
            </div>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-2">
                <li>
                  <Link
                    to="/web-development"
                    className="block px-7 py-4 hover:bg-gray-100 font-semibold"
                  >
                    Web Development
                  </Link>
                </li>

                <li >
                <Link to="app-development" className="px-7 py-4 hover:bg-gray-100">
                  App Development
                </Link>
                </li>

                <li className="pt-5">
                  <Link to="artificial-intelligence" className="px-7 py-4 hover:bg-gray-100">
                  Artificial Intelligence
                  </Link>
                </li>

                <li className="pt-5">
                  <Link to="cloud-computing"className="px-7 py-4 hover:bg-gray-100">
                  Cloud Computing
                  </Link>
                </li>

                <li className="pt-5">
               <Link to="deep-learning" className="px-7 py-4 hover:bg-gray-100">
                  Deep Learning
                  </Link>
                </li>

                <li className="pt-5">
                  <Link to="machine-learning" className="px-7  hover:bg-gray-100">
                  Machine Learning
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-teal-500">
              Product
              <span className="transition-transform grouo-hover:rotate-180"> ▾ </span>
            </div>

            <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <ul className="py-2">
                <li>
                  <Link to="smaro" className="px-7 hover:bg-gray-100">
                  Smaro
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link to="/about" className="hover:text-teal-500">
            About
          </Link>
        </nav>

        <Link to={"contact-us"}>
        <button className="bg-teal-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-teal-600 transition">
          Contact Us
        </button>
        </Link>
      </div>
    </header>
  );
};

export default TopBar;
