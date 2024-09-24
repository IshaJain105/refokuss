import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

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

 

  const [pos, setPos] = useState(0);

  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="my-20 relative ">
      {Products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden"
        >
       <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1],duration :.5}}
            className="w-full h-full "
          > <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png"></img > </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1],duration :.5}}
            className="w-full h-full "
          ><img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png"></img ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1],duration :.5}}
            className="w-full h-full "
          ><img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png"></img ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1],duration :.5}}
            className="w-full h-full "
          ><img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png"></img ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1],duration :.5}}
            className="w-full h-full "
          ><img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png"></img ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1],duration :.5}}
            className="w-full h-full "
          ><img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png"></img ></motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
          transition={{ease: [0.76, 0, 0.24, 1],duration :.5}}
            className="w-full h-full "
          ><img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png"></img ></motion.div>
          
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
