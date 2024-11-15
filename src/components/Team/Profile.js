import Image from "next/image";
import { IconData } from "@/data/IconData";

export default function Profile({ lead }) {
  let link = "";
  let icon = null;
  if (lead.linkedinLink) {
    link = lead.linkedinLink;
    icon = IconData.linkedin;
  } else if (lead.githubLink) {
    link = lead.githubLink;
    icon = IconData.github;
  } else if (lead.instagramLink) {
    link = lead.instagramLink;
    icon = IconData.instagram;
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex cursor-pointer flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#DA0400] to-[#890300] px-2 opacity-0 transition-all duration-300 hover:opacity-100">
      <h3 className="max-w-[95%] select-none text-center  text-sm/[110%] capitalize leading-none text-white md:text-lg/[110%] md:leading-tight">
        {lead.name}
      </h3>
      {link && (
        <a href={link} target="_blank">
          <div className="aspect-square w-[30px] translate-y-10 duration-300 ease-out group-hover:translate-y-0">
            <Image
              src={icon.icon || null}
              className="aspect-square w-full object-cover"
              alt={icon.text}
              width={50}
              height={50}
            />
          </div>
        </a>
      )}
    </div>
  );
}
