import React from "react";
import { useTranslation } from "./contexts/TranslationContext";
import Welcome from "./Welcome";

const Home = () => {
  const { lang } = useTranslation();

  return (
    <>
      <div>{lang.home.location}</div>
      <br />
      <Welcome />
      <br />
    </>
  );
};

export default Home;
