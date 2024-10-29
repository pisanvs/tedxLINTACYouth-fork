import Container from "@/components/utility/Container";
import Link from "next/link";

export default function MeetUs() {
  return (
    <Container section="meetus">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <quote className="mb-[15px] w-[89%] text-[19px] font-light leading-tight md:w-[75%] md:text-[24px]">
          This initiative would not have been possible without the hard work of our team members. ❤️
        </quote>
        <button className="w-[185px] rounded-[3px] bg-red font-semibold">
          <Link
            href="/meet-us"
            className="flex h-full w-full justify-center py-2 "
          >
            MEET THEM
          </Link>
        </button>
      </div>
    </Container>
  );
}
