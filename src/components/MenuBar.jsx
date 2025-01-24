import { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuBar = () => {
  const navigate = useNavigate();
  const { isClicked, handleMenuClose } = useContext(MenuContext);

  return (
    <div className="sm:block md:block lg:hidden xl:hidden 2xl:hidden">
      {isClicked && (
        <div className="fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={handleMenuClose}
          />
          <div className="fixed inset-y-0 right-0 w-full bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-end p-4">
                <button onClick={handleMenuClose} className="p-2">
                  <div className="flex flex-col gap-[6px] w-7 relative">
                    <div className="h-[3px] w-full bg-[#326699] rounded-full rotate-45 absolute" />
                    <div className="h-[3px] w-full bg-[#326699] rounded-full -rotate-45" />
                  </div>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 pb-6 overflow-y-auto">
                <ul className="space-y-6">
                  <li>
                    <button
                      onClick={() => {
                        navigate("/");
                        handleMenuClose();
                      }}
                      className="text-lg font-semibold text-[#333333] hover:text-[#326699] transition-colors"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-[#333333]">
                          Causes
                        </span>
                        <IoMdArrowDropdown className="text-[#326699]" />
                      </div>
                      <ul className="pl-4 space-y-4">
                        <li>
                          <button
                            onClick={() => {
                              navigate(
                                "/projects#Safe-Net-Ambassadors-Program"
                              );
                              handleMenuClose();
                            }}
                            className="text-base text-[#333333] hover:text-[#326699] transition-colors"
                          >
                            Safe Net Ambassador's Program
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              navigate("/projects#Almajiri-in-Tech-Initiative");
                              handleMenuClose();
                            }}
                            className="text-base text-[#333333] hover:text-[#326699] transition-colors"
                          >
                            Almajiri in Tech Initiative
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              navigate("/projects#Empower-Her-Future");
                              handleMenuClose();
                            }}
                            className="text-base text-[#333333] hover:text-[#326699] transition-colors"
                          >
                            Empower Her Future
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              navigate("/projects#Health-Awareness");
                              handleMenuClose();
                            }}
                            className="text-base text-[#333333] hover:text-[#326699] transition-colors"
                          >
                            Health Awareness
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/about");
                        handleMenuClose();
                      }}
                      className="text-lg font-semibold text-[#333333] hover:text-[#326699] transition-colors"
                    >
                      Who We Are
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/girl-child");
                        handleMenuClose();
                      }}
                      className="text-lg font-semibold text-[#333333] hover:text-[#326699] transition-colors"
                    >
                      Girl Child
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate("/#join-us");
                        handleMenuClose();
                      }}
                      className="text-lg font-semibold text-[#333333] hover:text-[#326699] transition-colors"
                    >
                      Join Us
                    </button>
                  </li>
                </ul>
              </nav>

              {/* Action Buttons */}
              <div className="p-6 border-t">
                <div className="grid gap-4">
                  <Button
                    content="Donate"
                    btnStyle="bg-[#326699] text-white before:bg-[#0f172a] border-white w-full"
                  />
                  <Button
                    content="Get Involved"
                    btnStyle="before:bg-[#0f172a] text-[#326699] border-[#326699] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuBar;
