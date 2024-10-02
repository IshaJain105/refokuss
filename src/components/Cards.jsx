import React from "react";
import Card from "./Card";

const Cards = () => {
    const cardDetail=[
        {title:"Up next: Culture", heading:"Who we are", width:"basis-1/3", para:true, start:false ,hover:"false"},
        {title:"Get In Touch", heading:`Let's get to it, together.`,width:"basis-2/3", para:false, start:true, hover:"true"}

    ]
  return (
    <div className="w-full pb-20 ">
      <div className="max-w-screen-xl mx-auto min-h-[25rem] flex gap-2">
        {cardDetail.map((card,index)=>(
            <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
