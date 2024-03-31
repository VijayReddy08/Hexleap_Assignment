import React from "react";
import Image from "next/image";

type CardProps = {
  imgsrc: string;
  imgwidth: number;
  team: string;
  eventscount: number;
  sport: string;
};

export default function Card(cardprops: CardProps) {
  return (
    <div className="p-2 flex flex-col shrink-0 w-fit drop-shadow-[0_4px_8px_rgba(0, 0, 0, 0.05)] bg-[#FFFFFF] dark:bg-[#3B3E47]">
      <figure>
        <Image
          src={cardprops.imgsrc}
          alt={cardprops.team}
          width={cardprops.imgwidth}
          height={386}
          priority
        />
        <figcaption className="inter py-2 text-[1.0625rem]/[1.285625rem] font-medium text-[#000000] dark:text-[#FFFFFF]">
          {cardprops.team}
        </figcaption>
      </figure>

      <div className="flex gap-x-11 bg-[#F7F7F8] p-2 dark:bg-[#292B32] rounded-sm">
        <div>
          <p className="inter text-[0.75rem]/[0.9075rem] text-[#525965] font-normal dark:text-[#DFDFDF]">
            <span className="whitespace-nowrap">Total Events</span>
          </p>
          <p className="inter text-[0.875rem]/[1.05875rem] text-[#000000] dark:text-[#FFFFFF]">
            <span className="whitespace-nowrap">
              {cardprops.eventscount} Events
            </span>
          </p>
        </div>
        <div>
          <p className="inter text-[0.75rem]/[0.9075rem] text-[#525965] font-normal dark:text-[#DFDFDF]">
            Sport
          </p>
          <p className="inter text-[0.875rem]/[1.05875rem] text-[#000000] dark:text-[#FFFFFF]">
            <span className="whitespace-nowrap">{cardprops.sport}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
