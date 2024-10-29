import { organizer, coorganizer } from "@/data/TeamData";
import Image from "next/image";
import Icon from "./Profile";

export default function Organizer() {
  const org = organizer[0];
  return (
    <div className="">
    <section className="mt-8 md:mt-16">
      <div className="mt-3 flex justify-center py-3 md:justify-start">
        <div className="group relative aspect-square h-[180px]  overflow-hidden rounded-full mx-auto">
          <Image
            src={org.imageLink}
            alt={`${org.name}'s image`}
            className="aspect-square w-full object-cover transition-all duration-300 group-hover:scale-110"
            width={200}
            height={200}
          />
          <Icon lead={org} />
        </div>
      </div>
    </section>
  </div>
  );
}
