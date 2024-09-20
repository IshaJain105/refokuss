import React from "react";
import Product from "./Product";

const Products = () => {
  const Products = [
    {
      title: "Arqitle",
      description:
        "Arqitle Lorem ipsum dolor sit amet, consectetur adipiscing elit.m fmer f ernf nr fmr efner fnm erfnm fnmf nme vnme vnmev nmerfe fkklmeklqdejriowre",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "Arqitle Lorem ipsum dolor sit amet, consectetur adipiscing elit.m fmer f ernf nr fmr efner fnm erfnm fnmf nme vnme vnmev nmerfe fkklmeklqdejriowre",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Arqitle Lorem ipsum dolor sit amet, consectetur adipiscing elit.m fmer f ernf nr fmr efner fnm erfnm fnmf nme vnme vnmev nmerfe fkklmeklqdejriowre",
      live: true,
      case: true,
    },
    {
      title: "Yahoo",
      description:
        "Arqitle Lorem ipsum dolor sit amet, consectetur adipiscing elit.m fmer f ernf nr fmr efner fnm erfnm fnmf nme vnme vnmev nmerfe fkklmeklqdejriowre",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "Arqitle Lorem ipsum dolor sit amet, consectetur adipiscing elit.m fmer f ernf nr fmr efner fnm erfnm fnmf nme vnme vnmev nmerfe fkklmeklqdejriowre",
      live: true,
      case: true,
    },
    {
      title: "Jungle",
      description:
        "Arqitle Lorem ipsum dolor sit amet, consectetur adipiscing elit.m fmer f ernf nr fmr efner fnm erfnm fnmf nme vnme vnmev nmerfe fkklmeklqdejriowre",
      live: true,
      case: false,
    },
    {
      title: "Summon",
      description:
        "Arqitle Lorem ipsum dolor sit amet, consectetur adipiscing elit.m fmer f ernf nr fmr efner fnm erfnm fnmf nme vnme vnmev nmerfe fkklmeklqdejriowre",
      live: true,
      case: false,
    },
  ];
  return (
    <div className="my-20">
      {Products.map((elem, index) => (
        <Product key={index} val={elem} />
      ))}
    </div>
  );
};

export default Products;
