import React from "react";

const Footer = () => {
  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto flex py-10 gap-32">
        <div className="basis-1/2 flex flex-col">
          <h1 className="text-[11rem] tracking-tight font-medium leading-none">
            refokus.
          </h1>
          <div className="mt-10 flex gap-5">{["Privacy Policy", "Cookie Policy", "Impressum","Terms"].map((item, index) => (
              <a className="text-sm block mt-2 text-zinc-500">{item}</a>
            ))}</div>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h1 className=" text-zinc-500 mb-10">Socials</h1>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((item, index) => (
              <a className="block mt-2 text-sm text-zinc-600">{item}</a>
            ))}
          </div>
          <div className="basis-1/3">
            <h1 className=" text-zinc-500 mb-10">Sitemap</h1>
            {["Home", "Work", "Careers","Contact"].map((item, index) => (
              <a className="block mt-2 text-sm text-zinc-300">{item}</a>
            ))}
          </div>
          <div className="basis-3/4 flex flex-col items-end justify-center">
            <p className="text-right text-sm">Refokus is a pioneering digital agency driven by design and empowered by technology. </p>
            <img src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg" className="w-32 mt-10" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
