import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuBar = () => {
  const navigate = useNavigate();
  // menu context
  const { isClicked, handleMenuClose } = useContext(MenuContext);
  return (
    <div>
      {isClicked && (
        <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50 z-30">
          <section
            className={`${
              isClicked ? "translate-x-0" : "translate-x-[-100%]"
            } h-screen w-full fixed top-0 right-0 bg-[#f7faf9] z-30 transition-all duration-200 transform`}
          >
            <div className="relative h-full p-6">
              {/* closing icon on menu bar */}
              <div
                onClick={() => handleMenuClose()}
                className="absolute right-6 top-6 cursor-pointer"
              >
                <div className="h-[3px] w-7 rounded-full rotate-45 bg-[#326699] translate-y-[6px]" />
                <div className="h-[3px] w-7 rounded-full -rotate-45 bg-[#326699]" />
              </div>
              {/* links */}
              <ul className="flex flex-col gap-6 text-[#453838] font-semibold text-[18px] capitalize mt-20">
                <li
                  onClick={() => {
                    navigate("/");
                    handleMenuClose();
                  }}
                  className="hover:text-[#326699] transition-colors"
                >
                  home
                </li>
                <li className="hover:text-[#326699] transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    causes <IoMdArrowDropdown />
                  </div>
                  <ul className="flex flex-col gap-4 ml-4 text-[16px]">
                    <li
                      onClick={() => {
                        navigate("/projects#Safe-Net-Ambassadors-Program");
                        handleMenuClose();
                      }}
                      className="hover:text-[#326699] transition-colors py-2"
                    >
                      Safe Net Ambassador&apos;s Program
                    </li>
                    <li
                      onClick={() => {
                        navigate("/projects#Almajiri-in-Tech-Initiative");
                        handleMenuClose();
                      }}
                      className="hover:text-[#326699] transition-colors py-2"
                    >
                      Almajiri in Tech Initiative
                    </li>
                    <li
                      onClick={() => {
                        navigate("/projects#Empower-Her-Future");
                        handleMenuClose();
                      }}
                      className="hover:text-[#326699] transition-colors py-2"
                    >
                      Empower Her Future
                    </li>
                    <li
                      onClick={() => {
                        navigate("/projects#Health-Awareness");
                        handleMenuClose();
                      }}
                      className="hover:text-[#326699] transition-colors py-2"
                    >
                      Health Awareness
                    </li>
                  </ul>
                </li>
                <li
                  onClick={() => {
                    navigate("/about");
                    handleMenuClose();
                  }}
                  className="hover:text-[#326699] transition-colors"
                >
                  Who we are
                </li>
                <li
                  onClick={() => {
                    navigate("/girl-child");
                    handleMenuClose();
                  }}
                  className="hover:text-[#326699] transition-colors"
                >
                  Girl Child
                </li>
                <li
                  onClick={() => {
                    navigate("/#join-us");
                    handleMenuClose();
                  }}
                  className="hover:text-[#326699] transition-colors"
                >
                  Join Us
                </li>
              </ul>
              {/* buttons */}
              <div className="absolute bottom-10 left-6 right-6 flex flex-col gap-4">
                <Button
                  content={"donate"}
                  btnStyle={
                    "bg-[#326699] text-white before:bg-[#0f172a] border-white w-full"
                  }
                />
                <Button
                  content={"get involved"}
                  btnStyle={
                    "before:bg-[#0f172a] text-[#326699] border-[#326699] w-full"
                  }
                />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
