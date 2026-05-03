import React from "react";
import Logo from "./Logo.png";
import { Link } from "react-router-dom";

export const Home_ = () => {
  return (
    <div className="flex px-12 pt-2 items-center">
      <div className="logo flex-1 ">
        <img className="object-center w-50 h-30" src={Logo} alt="Logo" />
      </div>
      <div className="navlist font-arimo">
        <ul className="flex gap-20">
          {["Home", "About", "Project", "Blog", "Contact"].map((item, idx) => {
            return (
              <li key={"${idx}-hi"} className="text-2xl">
                <Link to={item}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
