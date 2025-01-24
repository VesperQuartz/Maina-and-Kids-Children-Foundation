import { useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
// import image logo
import Logo from "/assets/maina-and-kids.png";
// import dependencies, components and icons
import { useNavigate, useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

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
    if (location.pathname === "/") {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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
    <nav
      className={`bg-white transition-all duration-300 p-4 flex justify-between items-center s:px-[5px] sm:px-[20px] md:px-[60px] lg:px-[80px] xl:px-[100px] 2xl:px-[100px] sticky top-0 z-50`}
    >
      {/* image */}
      <NavLink to="/">
        <div className="max-w-fit">
          {" "}
          {/* Added container constraint */}
          <img
            src={Logo}
            alt="Maina and Kids Foundation"
            className={`${isActive ? "hidden" : "block"} 
        max-w-[50px] max-h-[50px] 
        sm:max-w-[65px] sm:max-h-[65px] 
        md:max-w-[75px] md:max-h-[75px] 
        lg:max-w-[80px] lg:max-h-[80px] 
        xl:max-w-[90px] xl:max-h-[90px] 
        w-auto h-auto
        object-contain`}
          />
        </div>
      </NavLink>
      <div className="s:block sm:block md:block lg:hidden xl:hidden"></div>
      {/* nav links desktop*/}
      <ul
        className={`s:hidden sm:hidden md:flex lg:flex xl:flex gap-[60px] text-[#333333] justify-center font-semibold capitalize`}
      >
        <li
          className={`${location.pathname === "/" ? "text-[#000000] font-bold" : "text-[#333333]"} flex gap-0.5 items-center relative hover:cursor-pointer`}
          onClick={() => navigate("/")}
        >
          home
        </li>
        <li
          onClick={() => handleNavHover()}
          className={`${isDropdownHovered ? "text-[#000000] font-bold" : "text-[#333333]"} flex gap-0.5 items-center relative hover:cursor-pointer`}
        >
          <span className="flex gap-2 items-center justify-center">
            causes <IoMdArrowDropdown />
          </span>{" "}
          {isDropdownHovered && isVisible && (
            <div className="absolute top-10 bg-white text-gray-600 rounded-lg h-fit w-[350px] p-5 shadow-lg md:text-sm">
              <ul>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                  <Link
                    onClick={() => navigate("/projects")}
                    to="Safe-Net-Ambassadors-Program"
                    smooth={true}
                  >
                    Safe Net Ambassador&apos;s Program
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                  <Link
                    onClick={() => navigate("/projects")}
                    to="Almajiri-in-Tech-Initiative"
                    smooth={true}
                  >
                    Almajiri in Tech Initiative
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                  <Link
                    onClick={() => navigate("/projects")}
                    to="Empower-Her-Future"
                    smooth={true}
                  >
                    Empower Her Future
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:text-[#453838] border-b py-1.5">
                  <Link
                    onClick={() => navigate("/projects")}
                    to="Health-Awareness"
                    smooth={true}
                  >
                    Health Awareness
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          onClick={() => navigate("/about")}
          className={`${location.pathname === "/about" ? "text-[#000000] font-bold" : "text-[#333333]"} hover:cursor-pointer`}
        >
          Who we are
        </li>
        <li
          onClick={() => navigate("/girl-child")}
          className={`${location.pathname === "/girl-child" ? "text-[#000000] font-bold" : "text-[#333333]"} hover:cursor-pointer`}
        >
          Girl Child
        </li>
        <li
          onClick={() => navigate("/#join-us")}
          className={`${location.pathname === "join-us" ? "text-[#000000] font-bold" : "text-[#333333]"} hover:cursor-pointer`}
        >
          Join Us
        </li>
      </ul>{" "}
      {/* mobile view menu tab */}
      <div
        onClick={() => {
          setIsClicked(!isClicked), toggleMenu();
        }}
        className="s:flex sm:flex flex-col justify-center items-center lg:hidden xl:hidden md:hidden cursor-pointer gap-[5px] mr-8"
      >
        <div
          className={`h-[3px] w-7 bg-[#453838] transition-transform duration-200 rounded-full ${isActive ? "rotate-45 bg-[#326699] translate-y-2" : ""}`}
        />
        <div
          className={`h-[3px] w-7 bg-[#453838] transition-opacity duration-200 rounded-full ${isActive ? "opacity-0 bg-[#326699]" : "opacity-100"}`}
        />
        <div
          className={`h-[3px] w-7 bg-[#453838] transition-transform duration-200 rounded-full ${isActive ? "-rotate-45 bg-[#326699] -translate-y-2" : ""}`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
