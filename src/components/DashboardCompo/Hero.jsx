import React from "react";
import WhiteBtn from "../Button/WhiteBtn";
import BlackBtn from "../Button/BlackBtn";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <main className="flex justify-between padding-x py-10 z-10 w-full rounded-md">
      <div className="p-4">
        <h1 className="text-5xl">Hi Admin &#9996;&#65039;</h1>
        <p>Here's you need to update about placements and internship</p>
      </div>
      <div className="p-4 mt-5 ">
        <NavLink to="/add_company">
          <WhiteBtn text={"Add Company"} />
        </NavLink>
        <NavLink to="/update_company">
        <BlackBtn text={"Update Company"} />
        </NavLink>
        
      </div>
    </main>
  );
}

export default Hero;
