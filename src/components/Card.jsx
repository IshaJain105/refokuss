import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ card }) => {
  return (
    <div
      className={`bg-zinc-800 flex flex-col justify-between rounded-xl p-6 ${card.width} hover:${card.hover}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          <h3 className="text-sm">{card.title}</h3>
          <BsArrowRight />
        </div>
        <h1 className="text-3xl mt-5 font-regular w-60">{card.heading}</h1>
      </div>
      <div className="down w-full">
        {card.start && (
          <>
            <h1 className="text-[12vh] tracking-tight leading-none font-medium">
              Start a Project
            </h1>
            <button className="bg-transparent border-zinc-50 border-[1px] px-5 py-3 rounded-full mt-5">
              Contact us
            </button>
          </>
        )}
        {card.para && (
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur.</p>
        )}
      </div>
    </div>
  );
};

export default Card;
