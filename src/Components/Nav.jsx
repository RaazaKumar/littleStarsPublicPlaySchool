import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-blue-500 w-full shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">
            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:justify-center sm:items-center space-x-6 text-white font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-300 text-blue-800 px-3 py-1 rounded-full"
                    : "hover:text-yellow-300 px-3 py-1 rounded-full"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-300 text-blue-800 px-3 py-1 rounded-full"
                    : "hover:text-yellow-300 px-3 py-1 rounded-full"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/fee"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-300 text-blue-800 px-3 py-1 rounded-full"
                    : "hover:text-yellow-300 px-3 py-1 rounded-full"
                }
              >
                Fee
              </NavLink>

              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  isActive
                    ? "bg-yellow-300 text-blue-800 px-3 py-1 rounded-full"
                    : "hover:text-yellow-300 px-3 py-1 rounded-full"
                }
              >
                Contact Us
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden left-0 w-full inset-0 bg-blue-500 text-white flex flex-col space-y-6 px-6 py-10 font-medium z-50 rounded-full-b-2xl shadow-lg">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-300 text-blue-800 px-3 py-1 rounded-full"
                  : "hover:text-yellow-300 px-3 py-1 rounded-full"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/aboutus"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-300 text-blue-800 px-3 py-1 rounded-full"
                  : "hover:text-yellow-300 px-3 py-1 rounded-full"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/fee"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-300 text-blue-800 px-3 py-1 rounded-full"
                  : "hover:text-yellow-300 px-3 py-1 rounded-full"
              }
            >
              Fee
            </NavLink>

            <NavLink
              to="/contactus"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "bg-yellow-300 text-blue-800 px-3 py-1 rounded-full"
                  : "hover:text-yellow-300 px-3 py-1 rounded-full"
              }
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
