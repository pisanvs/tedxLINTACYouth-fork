import Link from "next/link"

import RedText from "./utility/RedText";
import Address from "@/components/Footers/Address";
import Logos from "@/components/Footers/Logos";
import UsefulLinks from "@/components/Footers/UsefulLinks";
import FooterIcon from "./Footers/FooterIcon";
import {
  githubLink,
  instagramLink,
  linkedinLink,
  youtubeLink,
} from "@/data/SocialLinks";

const Footer = () => {
  return (
    <footer className="w-screen space-y-5 bg-deepGrey px-[2rem] py-[3.5rem] md:mt-[6rem] md:space-y-[3rem] lg:px-[75px]">
      <section className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
        <Logos />
        <Address />
        <UsefulLinks />
      </section>
      <section className="footer_text flex flex-col-reverse items-center justify-between gap-3 text-center md:flex-row ">
        <div>2024 TEDxLINTAC Youth (Code originally open-sourced by <RedText><Link href={"https://tedxgecrit.vercel.app/"} className="hover:underline">TEDxGECRIT</Link></RedText> team)</div>
        <div className="flex select-none flex-row justify-center gap-1">
          {/*<FooterIcon link={linkedinLink} iconName="linkedin" />*/}
          <FooterIcon link={instagramLink} iconName="instagram" />
          <FooterIcon link={githubLink} iconName="github" />
          <FooterIcon link={youtubeLink} iconName="youtube" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
