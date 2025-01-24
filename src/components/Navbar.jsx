import { useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
// import image logo
import Logo from "/assets/maina-and-kids.png";
// import dependencies, components and icons
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { Link } from "react-scroll";

const Navbar = () => {
  // getting states from menu context
  const { isActive, setIsClicked, isClicked, toggleMenu } =
    useContext(MenuContext);

  // setting state for dropdown menu
  const [isDropdownHovered, setIsDropDownHovered] = useState(false);
  // Set drop down to only be visible in home page
  const [isVisible, setIsVisible] = useState(false);

  // function to handle dropdown state
  const handleNavHover = () => {
    setIsDropDownHovered(!isDropdownHovered);
  };

  // initializing use location and use navigate
  const location = useLocation();
  const navigate = useNavigate();

  // initializing navbar bg color and setting bg color based on path
  // let navbarBg = 'bg-white';
  // if (location.pathname === '/') {
  //   navbarBg = "bg-[url('/assets/hero-bg.png')]"
  // }

  useEffect(() => {
    setIsVisible(location.pathname === "/");
  }, [location]);

  // setting state for scrolling on window
  // eslint-disable-next-line no-unused-vars
  const [_isScrolled, setIsScrolled] = useState(false);

  // use effect to conditionally control state for window
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1000 ? setIsScrolled(true) : setIsScrolled(false);
    });
  });
  return (
    // based on how far a user is in a page, the navbar changes
    <nav className="bg-white fixed w-full top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img
              src={Logo}
              alt="Maina and Kids Foundation"
              className="h-12 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="sm:hidden md:hidden lg:flex xl:flex 2xl:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-semibold hover:text-[#326699] transition-colors ${
                  isActive ? "text-[#000000]" : "text-[#333333]"
                }`
              }
            >
              Home
            </NavLink>

            {/* Causes Dropdown */}
            <div className="relative">
              <button
                onClick={handleNavHover}
                className="flex items-center gap-1 text-base font-semibold text-[#333333] hover:text-[#326699] transition-colors"
              >
                Causes <IoMdArrowDropdown />
              </button>
              {isDropdownHovered && isVisible && (
                <div className="absolute top-full right-0 w-[350px] bg-white rounded-lg shadow-lg mt-2 py-2">
                  <Link
                    to="Safe-Net-Ambassadors-Program"
                    onClick={() => {
                      navigate("/projects");
                      setIsDropDownHovered(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#326699]"
                  >
                    Safe Net Ambassador's Program
                  </Link>
                  <Link
                    to="Almajiri-in-Tech-Initiative"
                    onClick={() => {
                      navigate("/projects");
                      setIsDropDownHovered(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#326699]"
                  >
                    Almajiri in Tech Initiative
                  </Link>
                  <Link
                    to="Empower-Her-Future"
                    onClick={() => {
                      navigate("/projects");
                      setIsDropDownHovered(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#326699]"
                  >
                    Empower Her Future
                  </Link>
                  <Link
                    to="Health-Awareness"
                    onClick={() => {
                      navigate("/projects");
                      setIsDropDownHovered(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#326699]"
                  >
                    Health Awareness
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-semibold hover:text-[#326699] transition-colors ${
                  isActive ? "text-[#000000]" : "text-[#333333]"
                }`
              }
            >
              Who We Are
            </NavLink>

            <NavLink
              to="/girl-child"
              className={({ isActive }) =>
                `text-base font-semibold hover:text-[#326699] transition-colors ${
                  isActive ? "text-[#000000]" : "text-[#333333]"
                }`
              }
            >
              Girl Child
            </NavLink>

            <NavLink
              to="/#join-us"
              className={({ isActive }) =>
                `text-base font-semibold hover:text-[#326699] transition-colors ${
                  isActive ? "text-[#000000]" : "text-[#333333]"
                }`
              }
            >
              Join Us
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="sm:flex md:flex lg:hidden xl:hidden 2xl:hidden items-center justify-center p-2"
            onClick={() => {
              setIsClicked(!isClicked);
              toggleMenu();
            }}
          >
            <div className="flex flex-col gap-[6px] w-7">
              <div
                className={`h-[3px] w-full bg-[#326699] rounded-full transition-all duration-300 ${
                  isClicked ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <div
                className={`h-[3px] w-full bg-[#326699] rounded-full transition-all duration-300 ${
                  isClicked ? "opacity-0" : ""
                }`}
              />
              <div
                className={`h-[3px] w-full bg-[#326699] rounded-full transition-all duration-300 ${
                  isClicked ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
