"use client";
import Container from "@/components/utility/Container";
import { useDict } from "@/locales/dict";
import Link from "next/link";

export default function MeetUs() {
  const { dictionary } = useDict();

  return (
    <Container section="meetus">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <p className="mb-[15px] w-[89%] text-[19px] font-light leading-tight md:w-[75%] md:text-[24px]">
          {dictionary.teamThanks}
        </p>
        <button className="w-[185px] rounded-[3px] bg-red font-semibold">
          <Link
            href="/meet-us"
            className="flex h-full w-full justify-center py-2 "
          >
            {dictionary.teamMeet}
          </Link>
        </button>
      </div>
    </Container>
  );
}
