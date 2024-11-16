import Container from "@/components/utility/Container";
import RedText from "./utility/RedText";
import { useDict } from "@/locales/dict";
import { renderTemplate } from "@/utils/templateRenderer";
import { useEffect, useState } from "react";

const AboutTheme = () => {
  const { dictionary } = useDict()

  return (
    <Container section="about_theme">
      <article className="mb-8 flex w-full items-center justify-center pt-2 text-center md:px-[5%]">
        <p className="para block px-2 text-left text-lg md:px-0 md:text-center">
          {dictionary?.aboutTheme1 ? renderTemplate(dictionary.aboutTheme1) : "..."}
          <br />
          <br />

          {dictionary?.aboutTheme2 ? renderTemplate(dictionary?.aboutTheme2) : "..."}
        </p>
      </article>
    </Container>
  );
};

export default AboutTheme;
