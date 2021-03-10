import React from "react";
import { useTranslation } from "./contexts/TranslationContext";

const About = () => {
  const { lang } = useTranslation();

  return (
    <>
      <br></br>
      <div>{lang.about.location}</div>
    </>
  );
};

export default About;
