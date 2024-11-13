import Container from "@/components/utility/Container";
import RedText from "./utility/RedText";

const AboutTheme = () => {
  return (
    <Container section="about_theme">
      <article className="mb-8 flex w-full items-center justify-center pt-2 text-center md:px-[5%]">
        <p className="para block px-2 text-left text-lg md:px-0 md:text-center">
          The theme for <RedText>TEDxLINTAC <b>Youth</b></RedText>, <i>"All Limits; Beyond Limits," &nbsp;</i>
          invites <b>exploration of the boundaries we face</b> in various aspects
          of life and how we can transcend them. Whether they're physical,
          mental, societal, or technological, limits shape our perception
          of the world, challenging us to adapt, innovate, and grow.
          By examining these limits, we not only recognize the constraints
          that define our experiences but also discover the opportunities
          they present. <b>Our goal is to enable powerful conversations about what it means
          to face limits </b> whether as obstacles, motivators, or even
          catalysts of creativity. We deeply believe that pushing beyond these boundaries
          is what our community needs.
          <br />
          <br />

          Through this theme, we aim to cultivate a sense of curiosity and
          inspiration. This year, <RedText>TEDxLINTAC <b>Youth</b></RedText> is about sharing ideas
          that encourage us to rethink the possible, exploring stories of
          resilience, innovation, and imagination.
        </p>
      </article>
    </Container>
  );
};

export default AboutTheme;
