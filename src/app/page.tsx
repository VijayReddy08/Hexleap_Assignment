import Image from "next/image";
import Card from "./card";
import AdCard from "./adcard";
import TicketCard from "./ticketcard";

export default function Home() {
  return (
    <main className="my-10">
      <section className="flex justify-center">
        <div className="mobile">
          <h1 className="poppins mb-5 but text-[1.5rem]/[2.25rem] border-b-2 border-[#738fff] w-fit py-0.5 font-bold text-[#000000] dark:text-[#FFFFFF]">
            Sports
          </h1>
          <div className="mobile flex flex-wrap  gap-2">
            <Card
              imgsrc="/Mask group.svg"
              imgwidth={219}
              team="Sacramento River Cats"
              eventscount={48}
              sport="Baseball"
            />

            <Card
              imgsrc="/Mask group1.svg"
              imgwidth={220}
              team="Las Vegas Aviators"
              eventscount={28}
              sport="Baseball"
            />

            <Card
              imgsrc="/Mask group2.svg"
              imgwidth={219}
              team="New Jersey Devils"
              eventscount={15}
              sport="Ice Hockey"
            />

            <Card
              imgsrc="/Mask group1.svg"
              imgwidth={220}
              team="Las Vegas Aviators"
              eventscount={28}
              sport="Baseball"
            />

            <AdCard
              img="/unnamed.svg"
              title="Advertisement title"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>

          <div className="mt-10 text-center">
            <button className="bg-[#2C9CF0] py-[10px] px-[30px] rounded-[3px] drop-shadow-[0_0.25rem_0.5rem_rgba(0, 0, 0, 0.05)]">
              <span className="inter text-[0.875rem]/[1.618125rem] text-[#FFFFFF]">
                See More
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="m-10 but flex justify-center">
        <div className="mobile2 w-fill p-10 bg1 bg2">
          <h1 className="poppins text-[3.125rem]/[3.28125rem] text-[#000000] font-bold dark:text-[#FFFFFF] text-center">
            Collection Spotlight
          </h1>

          <div className="flex justify-center">
            <p className="inter p-6 w-[85%] text-[0.875rem]/[1.415625rem] font-normal text-center text-[#000000] dark:text-[#FFFFFF]">
              Discover extraordinary moments with our Spotlight Collection
              metatickets—exclusive access to premium events for an
              unforgettable experience. Grab yours today!
            </p>
          </div>

          <div className="mobile1 flex justify-center gap-x-8">
            <div className="first:pr-10 but items-center flex flex-col justify-center">
              <button className="w-[2.296875rem] h-[3.0625rem] border border-[#2C9CF0] text-[#2C9CF0]">
                <figure className="flex justify-center">
                  <Image
                    src="/Vector.svg"
                    alt="button"
                    width={12}
                    height={21}
                    priority
                  />
                </figure>
              </button>
            </div>

            <TicketCard
              id="t1"
              imgsrc="/Ticket1.svg"
              team="Las Vegas Aviators"
              date={{ month: "Oct 15", day: "SUN", time: "4:30 PM" }}
              venue="Las Vegas Ballpark, Las Vegas, Nevada"
              collection="Take Flight"
            />

            <TicketCard
              id="t2"
              imgsrc="/Ticket2.svg"
              team="Sacramento River Cats"
              date={{ month: "Oct 15", day: "SUN", time: "4:30 PM" }}
              venue="Sutter Health Park, Sacramento, California"
              collection="Orange"
            />

            <TicketCard
              id="t3"
              imgsrc="/Ticket1.svg"
              team="Las Vegas Aviators"
              date={{ month: "Oct 15", day: "SUN", time: "4:30 PM" }}
              venue="Las Vegas Ballpark, Las Vegas, Nevada"
              collection="Take Flight"
            />

            <div className="last:pl-10 but flex flex-col justify-center">
              <button className="w-[2.296875rem] h-[3.0625rem] border border-[#2C9CF0] text-[#2C9CF0]">
                <figure className="flex justify-center">
                  <Image
                    src="/Vector1.svg"
                    alt="button"
                    width={12}
                    height={21}
                    priority
                  />
                </figure>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
