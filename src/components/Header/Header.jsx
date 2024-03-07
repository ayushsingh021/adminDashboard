import React from "react";
import { GrUserAdmin } from "react-icons/gr";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="padding-x py-3 z-10 w-full bg-[#F6F6F6] rounded-md">
      <nav className="flex">
        <div className=" flex justify-center items-center bg-white uppercase font-bold text-blue-900 shadow-md padding-x py-1 rounded-full w-3 text-center">
          <div>
            <GrUserAdmin className="text-blue-900 font-bold mr-2" />
          </div>
          Admin
        </div>
        <div className="flex justify-center items-center w-3/4 space-x-3">
          <div>
            <NavLink
              exact
              to="/"
              className={(isActive) =>
                `flex justify-center items-center ${
                  isActive.isActive ? "bg-white" : ""
                }   ${
                  isActive.isActive ? "text-black-900" : "text-gray-500"
                }   ${
                  isActive.isActive ? " shadow-sm " : ""
                } padding-x py-3 rounded-full w-3 text-center`
              }
            >
              Dashboard
            </NavLink>
          </div>
          <div className="flex justify-center items-center text-gray-500 padding-x py-3 rounded-full w-3 text-center">
            <NavLink
              exact
              to="/company"
              className={(isActive) =>
                `flex justify-center items-center ${
                  isActive.isActive ? "bg-white" : ""
                }   ${
                  isActive.isActive ? "text-black-900" : "text-gray-500"
                }   ${
                  isActive.isActive ? " shadow-sm " : ""
                } padding-x py-3 rounded-full w-3 text-center`
              }
            >
              Company
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
