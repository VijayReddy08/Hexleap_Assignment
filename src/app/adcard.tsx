import React from "react";
import Image from "next/image";

type AdProps = {
  img: string;
  title: string;
  content: string;
};

export default function AdCard(adprops: AdProps) {
  return (
    <div className="w-min card p-2 flex flex-col shrink-0 w-fit drop-shadow-[0_0.25rem_0.5rem_rgba(0, 0, 0, 0.05)] bg-[#FFFFFF] dark:bg-[#3B3E47]">
      <figure className="card-image relative">
        <Image
          src={adprops.img}
          alt={adprops.title}
          width={217}
          height={218}
          priority
        />
        <span className="inter bg-[#000000] py-[0.1875rem] px-[0.9375rem] text-[0.8rem]/[1.1875rem] font-bold text-[#FFFFFF] absolute top-0 right-0">
          Ad
        </span>
      </figure>

      <div className="flex flex-col py-6 px-3 border-[0.0125rem] border-[#006555]">
        <p className="text-[1.25rem]/[1.5125rem] font-semibold text-[#222D3A] dark:text-[#FFFFFF]">
          <span className="inter whitespace-nowrap">{adprops.title}</span>
        </p>
        <p className="inter pt-2 card-text text-[0.8rem]/[1.1875rem] text-[#525965] font-normal dark:text-[#DFDFDF]">
          {adprops.content}
        </p>
      </div>
    </div>
  );
}
