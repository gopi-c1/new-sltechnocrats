import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function TopBar() {
  const [openService, setOpenService] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);

  const activeClass =
    "text-teal-500 border-b-2 border-teal-500 pb-1";
  const normalClass =
    "text-gray-800 hover:text-teal-500 pb-1";

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">

        <div className="flex items-center gap-2">
          <img
            src="https://i.ibb.co/NQw1DKW/pic7.png"
            alt="logo"
            className="h-20 cursor-pointer "
          />
        </div>

        <ul className="flex items-center gap-10 font-medium">


          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>
              Home
            </NavLink>
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenService(true)}
            onMouseLeave={() => setOpenService(false)}
          >
            <span className="flex items-center gap-1 text-gray-800 hover:text-teal-500">
              Our Service <ChevronDown size={16} />
            </span>

            {openService && (
              <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-52 py-2">
                <li className="px-4 py-2 hover:bg-gray-100">Service 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Service 2</li>
              </ul>
            )}
          </li>

          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenProduct(true)}
            onMouseLeave={() => setOpenProduct(false)}
          >
            <span className="flex items-center gap-1 text-gray-800 hover:text-teal-500">
              Product <ChevronDown size={16} />
            </span>

            {openProduct && (
              <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-52 py-2">
                <li className="px-4 py-2 hover:bg-gray-100">Product 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Product 2</li>
              </ul>
            )}
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? activeClass : normalClass
            }>
              About
            </NavLink>
          </li>
        </ul>

        <Link to="/contact"
         className="bg-teal-500 text-white px-6 py-2 rounded-full font-medium transition inline-block text-center">
            Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default TopBar;
