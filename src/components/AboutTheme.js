import Container from "@/components/utility/Container";
import RedText from "./utility/RedText";
import { useDict } from "@/locales/dict";
import { renderTemplate } from "@/utils/templateRenderer";

const AboutTheme = () => {
  const {dict} = useDict()

  return (
    <Container section="about_theme">
      <article className="mb-8 flex w-full items-center justify-center pt-2 text-center md:px-[5%]">
        <p className="para block px-2 text-left text-lg md:px-0 md:text-center">
          {dict.aboutTheme1 ? renderTemplate(dict.aboutTheme1) : "..."}
          <br />
          <br />

          {renderTemplate(dict.aboutTheme2)}
        </p>
      </article>
    </Container>
  );
};

export default AboutTheme;
