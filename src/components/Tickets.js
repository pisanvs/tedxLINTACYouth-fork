import Container from "@/components/utility/Container";
import Heading from "./utility/Heading";
import Link from "next/link";
import { yepDeskLink } from "@/data/SocialLinks";

const GetTicketsButton = () => (
  <Link
    href={yepDeskLink}
    className="flex h-full w-full justify-center p-2 lg:py-1"
    target="_blank"
  >
    Tickets sold out
  </Link>
);

const Tickets = () => {
  return (
    <Container section="tickets">
      <Heading>Ticket</Heading>
      <div className="flex w-full flex-col items-center">
        <div className="relative h-[706px] w-[360px] overflow-hidden bg-tm bg-contain bg-center lg:h-[400px]  lg:w-[1200px] lg:bg-td">
          <button
            disabled={true}
            className="pointer-events-none absolute bottom-[50px] right-1/2 w-[165px] translate-x-1/2 cursor-not-allowed select-none rounded-[3px] bg-grey font-semibold text-white  lg:bottom-[70px] lg:right-[125px] lg:translate-x-0 "
          >
            <GetTicketsButton />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Tickets;
