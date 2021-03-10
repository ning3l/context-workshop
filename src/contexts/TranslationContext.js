import React, { createContext, useContext } from "react";

const TranslationContext = createContext();

export function useTranslation() {
  return useContext(TranslationContext);
}

export const languages = {
  eng: {
    about: {
      location: "About Bwok",
    },
    admin: {
      location: "Admin Page",
      main: "Lots of important secret stuff...",
    },
    home: {
      location: "Home Page",
    },
    logout: {
      location: "Logout",
    },
    signin: {
      location: "Signup",
    },
    signup: {
      location: "Signup",
    },
    welcome: "welcome to",
    greeting: "customers served daily",
    warning: "We're sorry, this functionality is not implemented yet!",
    buttons: {
      login: "Login",
      logout: "Logout",
      signup: "SignUp",
      update: "Update",
    },
  },
  deu: {
    about: {
      location: "Das ist Bwok",
    },
    admin: {
      location: "Admin Seite",
      main: "Super wichtige, geheime Infos...",
    },
    home: {
      location: "Startseite",
    },
    logout: {
      location: "Abmeldung",
    },
    signin: {
      location: "Anmeldung",
    },
    signup: {
      location: "Konto anlegen",
    },
    welcome: "Willkommen bei",
    greeting: "Kunden täglich",
    warning:
      "Es tut uns Leid, diese Funktion steht derzeit nicht zur Verfügung!",
    buttons: {
      login: "Anmelden",
      logout: "Abmelden",
      signup: "Registrieren",
      update: "Aktualiseren",
    },
  },
};

export function TranslationProvider({
  children,
  langSelection,
  setLangSelection,
}) {
  return (
    <TranslationContext.Provider
      value={{
        lang: langSelection === "eng" ? languages["eng"] : languages["deu"],
        langSelection,
        setLangSelection,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}
