import React from "react";
import Image from "next/image";
type props = {
  list: {
    id: number;
    title: string;
    para: string;
    image: string;
    price: string;
    cutPrice?: string;
    sale?: string;
    isNew?: boolean;
  };
};


  const SofaCard= ({ list } : props) => {
  
  const { title, image, para, price, cutPrice,sale, isNew } = list;

  // Determine the badge color
  const badgeColor = isNew
    ? "bg-green-500"
    : sale === "-30%"
    ? "bg-red-500"
    : "bg-green-500";

  // Determine the badge text
  const badgeText = isNew ? "New" : sale;

  return (
    <div>
      <div className="relative cursor-pointer text-center mx-auto bg-[#EAECF0] rounded-lg mb-9 w-[285px] h-[446px]">
        {/* Image */}
        <div>
          <Image
          height={100}
          width={100}
            src={image}
            alt={title}
            className="w-full h-[301px] object-cover rounded-t-lg"
          />
        </div>

        {/* Sale or New Badge */}
        {badgeText && (
          <div className="absolute top-3 right-3">
            <div
              className={`w-[40px] h-[40px] flex justify-center items-center rounded-full text-white text-sm font-bold ${badgeColor}`}
            >
              {badgeText}
            </div>
          </div>
        )}

        <div className="p-4 ">
          <h1 className="heading3">{title}</h1>
          <h3 className="heading4 pt-2">{para}</h3>
          <div className="flex justify-between items-center pt-3">
            <h3 className="text-[18px] font-bold text-gray-800">Rp: {price}</h3>
            <p className="text-[14px] line-through text-[#B0B0B0]">

              {cutPrice}
            </p>
            <p className="text-[14px] line-through text-[#B0B0B0]">
              
              {sale}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SofaCard;
