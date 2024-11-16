import { createContext, useContext, useState, useEffect } from "react";
import en from "./en/common";
import es from "./es/common";

const dictionaries = {
  en,
  es
}

// Create a context for the dictionary
export const DictContext = createContext();

// Create a provider component
export const DictProvider = ({ children }) => {
  const [locale, setLocale] = useState('en'); // Default locale
  const [dictionary, setDictionary] = useState(dictionaries[locale]);

  // Function to change the locale
  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    if (typeof window !== "undefined") {
      localStorage.setItem('locale', newLocale); // Persist the locale
    }
    console.log(newLocale)
    setDictionary(dictionaries[newLocale])
  };

  useEffect(() => {
    let initialLocale = 'en';

    if (typeof window !== "undefined") {
      // Get saved locale from localStorage
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale && dictionaries[savedLocale]) {
        initialLocale = savedLocale;
      } else {
        // Fallback to browser language
        const browserLanguage = navigator.language || navigator.userLanguage;
        const langCode = browserLanguage.split('-')[0];
        initialLocale = dictionaries[langCode] ? langCode : 'en';
      }
    }

    setLocale(initialLocale);
    setDictionary(dictionaries[initialLocale])
  }, []);

  return (
    <DictContext.Provider value={{ dictionary, changeLocale, locale }}>
      {children}
    </DictContext.Provider>
  );
};

// Custom hook to use the DictContext
export const useDict = () => {
  return useContext(DictContext);
};
