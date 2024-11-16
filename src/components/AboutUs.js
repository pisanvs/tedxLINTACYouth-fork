import Container from "@/components/utility/Container";
import Description from "@/components/About/Description";
import AboutHeading from "@/components/About/AboutHeading";
import AboutText from "@/components/About/AboutText";
import ReadMore from "@/components/About/ReadMore";
import Heading from "./utility/Heading";
import { useDict } from "@/locales/dict";

const AboutUs = () => {
  const { dictionary } = useDict();

  return (
    <Container section="about">
      <Heading>{dictionary.aboutUs.title}</Heading>
      <div className="flex flex-col gap-8 md:flex-row text-lg">
        <Description>
          <AboutHeading id="1">{dictionary.aboutUs.ted.heading}</AboutHeading>
          <AboutText>
            {dictionary.aboutUs.ted.text}
          </AboutText>
          <ReadMore link="https://www.ted.com/" />
        </Description>
        <Description>
          <AboutHeading id="2">{dictionary.aboutUs.tedx.heading}</AboutHeading>
          <AboutText>
            {dictionary.aboutUs.tedx.text}
          </AboutText>
          <ReadMore link="https://www.ted.com/about/programs-initiatives/tedx-program" />
        </Description>
        <Description>
          <AboutHeading id="3">{dictionary.aboutUs.tedxLINTAC.heading}</AboutHeading>
          <AboutText>
            {dictionary.aboutUs.tedxLINTAC.text}
          </AboutText>
        </Description>
      </div>
    </Container>
  );
};

export default AboutUs;
