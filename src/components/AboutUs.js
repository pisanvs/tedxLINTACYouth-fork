import Container from "@/components/utility/Container";
import Description from "@/components/About/Description";
import AboutHeading from "@/components/About/AboutHeading";
import AboutText from "@/components/About/AboutText";
import ReadMore from "@/components/About/ReadMore";
import Heading from "./utility/Heading";

const AboutUs = () => {
  return (
    <Container section="about">
      <Heading>About Us</Heading>
      <div className="flex flex-col gap-8 md:flex-row text-lg">
        <Description>
          <AboutHeading id="1">TED</AboutHeading>
          <AboutText>
            In the world of TED, human ingenuity and a dynamic platform bring
            together a collective of ideas that transcend borders. Like a master
            artist painting a canvas, TED reveals the beauty of knowledge,
            offering talks that span diverse fields, giving life to
            groundbreaking concepts in technology, arts, sciences, and beyond.
            Join this global collective, where ideas are born, and passions
            collide, envisioning a world of "ideas worth spreading."
          </AboutText>
          <ReadMore link="https://www.ted.com/" />
        </Description>
        <Description>
          <AboutHeading id="2">TEDx</AboutHeading>
          <AboutText>
            TEDx is a program of locally organized events that aims to replicate
            the TED experience. The "x" in TEDx stands for independently
            organized TED events. These self-organized events are a combination
            of TedTalks videos and live speakers, sparking deep discussions and
            connections in smaller groups. These events ignites the flame of
            inspiration, inviting people together to share transformative
            experiences and foster connections through the power of shared
            wisdom.
          </AboutText>
          <ReadMore link="https://www.ted.com/about/programs-initiatives/tedx-program" />
        </Description>
        <Description>
          <AboutHeading id="3">TEDxLINTAC Youth</AboutHeading>
          <AboutText>
          TEDxLINTAC Youth, hosted by Lincoln International Academy
          in Lo Barnechea, Chile, invites participants to explore
          this year's theme, "All Limits; Beyond Limits." Set for
          2025, the event aims to inspire curiosity and a fresh
          perspective on pushing boundaries in diverse fields, from
          science and technology to art and social impact. Targeting
          the youth, TEDxLINTAC Youth brings together a group of 100
          young leaders, thought leaders, and community members from
          LINTAC and neighboring schools for an inspiring exchange
          of ideas. With powerful talks from speakers in various
          disciplines, this event promotes dialogue and reflection,
          encouraging attendees to imagine and engage with new
          possibilities.
          </AboutText>
        </Description>
      </div>
    </Container>
  );
};

export default AboutUs;
