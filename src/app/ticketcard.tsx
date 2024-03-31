import React from "react";
import Image from "next/image";

type TicketProps = {
  id: string;
  imgsrc: string;
  team: string;
  date: { month: string; day: string; time: string };
  venue: string;
  collection: string;
};

export default function TicketCard(ticketprops: TicketProps) {
  return (
    <div
      id={ticketprops.id}
      className="flex flex-col w-fit bg-[#FFFFFF] dark:bg-[#3B3E47] drop-shadow-[0_0.25rem_0.5rem_rgba(0, 0, 0, 0.1)]"
    >
      <div className="relative">
        <figure className="flex justify-center drop-shadow-[0_0.25rem_0.5rem_rgba(0, 0, 0, 0.2)]">
          <Image
            src={ticketprops.imgsrc}
            alt={ticketprops.team}
            width={291}
            height={467}
            priority
          />
        </figure>

        <div className="w-[1.25rem] h-[1.25rem] rounded-full bg1 bg2 absolute bottom-[0px] left-[-0.625rem]"></div>

        <div className="flex justify-center">
          <div className="w-[0.25rem] h-[0.06rem] bg-[#818A97] absolute bottom-[0.5rem] left-[1.125rem]"></div>
          <div className="flex justify-center">
            <div className="line w-[80%] absolute bottom-[0.5rem] left-[1.6875rem]"></div>
          </div>
          <div className="w-[0.25rem] h-[0.06rem] bg-[#818A97] absolute bottom-[0.5rem] right-[1.375rem]"></div>
        </div>

        <div className="w-[1.25rem] h-[1.25rem] rounded-full bg1 bg2 absolute bottom-[0px] right-[-0.625rem]"></div>
      </div>

      <div className="p-2 flex flex-col bg-[#FFFFFF] dark:bg-[#3B3E47] drop-shadow-[0_0.25rem_0.5rem_rgba(0, 0, 0, 0.1)]">
        <h4 className="poppins pb-2 text-[#000000] text-[1.0625rem]/[1.6575rem] font-medium text-center dark:text-[#FFFFFF]">
          {ticketprops.team}
        </h4>

        <div className="flex justify-center mb-2">
          <p className="px-1 poppins text-[0.875rem]/[1.3125rem] text-center font-normal text-[#000000] dark:text-[#FFFFFF]">
            {ticketprops.date.month}
          </p>

          <div className="flex items-center">
            <div className="w-[0.033125rem] h-[0.75rem] bg-[#000000] dark:bg-[#FFFFFF]"></div>
          </div>

          <p className="px-1 poppins text-[0.875rem]/[1.3125rem] text-center font-normal text-[#000000] dark:text-[#FFFFFF]">
            {ticketprops.date.day}
          </p>

          <div className="flex items-center">
            <div className="w-[0.033125rem] h-[0.75rem] bg-[#000000] dark:bg-[#FFFFFF]"></div>
          </div>

          <p className="px-1 poppins text-[0.875rem]/[1.3125rem] text-center font-normal text-[#000000] dark:text-[#FFFFFF]">
            {ticketprops.date.time}
          </p>
        </div>

        <div className="flex justify-center">
          <p className="inter pb-2 w-[80%] text-center text-[0.875rem]/[1.28625rem] text-[#525965] dark:text-[#DFDFDF] font-normal">
            {ticketprops.venue}
          </p>
        </div>

        <div className="flex justify-center">
          <button className="inter mx-5 w-full whitespace-nowrap text-center bg-[#1D1D1F] px-7 py-2 text-[0.795625rem]/[0.963125rem] font-medium text-[#FFFFFF]">
            {ticketprops.collection} Collection
          </button>
        </div>
      </div>
    </div>
  );
}
