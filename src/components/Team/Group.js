import Profile from "./Profile";
import Image from "next/image";

export default function Group({ teamMember, heading }) {
  return (
    <section>
      {/* <h2 className="select-none text-center text-2xl/[70%] font-light capitalize tracking-tighter opacity-50 md:text-start md:text-3xl/[70%]"> */}
        {/* {heading} */}
      {/* </h2> */}
      <div className="mt-3 flex w-full flex-wrap justify-center gap-8 py-3 md:justify-start">
        {teamMember.map((member, index) => (
          <div
            className="group relative aspect-square h-[100px] overflow-hidden rounded-full md:h-[153px] mx-auto"
            key={index}
          >
            <Image
              src={member.imageLink}
              alt={`${member.name}'s image`}
              width={200}
              height={200}
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
            />
            <Profile lead={member} />
          </div>
        ))}
      </div>
    </section>
  );
}
