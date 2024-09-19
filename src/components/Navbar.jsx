import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between gap-20 text-white border-b-[0.1em] border-zinc-600">
      <div className="flex">
      <img
        src="https://cdn.prod.website-files.com/62df9251ae9124d9d726bcb9/62dfc1419247bccdd5a2dd1b_Tools.svg"
        alt=""
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture","","News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="w-0.5 h-8 bg-zinc-600"></span>
          ) : (
            <a key={index} href="#" className="text-sm flex items-center gap-1">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.15em #00FF19" }}
                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 "
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
      
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
