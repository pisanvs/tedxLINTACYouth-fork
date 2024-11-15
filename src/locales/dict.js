import { createContext, useContext, useState, useEffect } from "react";
import en from "./en/common";
import es from "./es/common";

const dictionaries = {
  en,
  es,
};

// Create a context for the dictionary
export const DictContext = createContext();

// Create a provider component
export const DictProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => {
    // Get the locale from localStorage or default to 'en'
    return localStorage.getItem('locale') || 'en';
  });
  const [dictionary, setDictionary] = useState(dictionaries[locale]);

  // Function to change the locale
  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale); // Persist the locale
  };

  // Update dictionary based on locale
  useEffect(() => {
    // Update the dictionary whenever the locale changes
    setDictionary(dictionaries[locale] || dictionaries['en']); // Fallback to 'en' if not found
  }, [locale]);

  return (
    <DictContext.Provider value={{ dictionary, changeLocale }}>
      {children}
    </DictContext.Provider>
  );
};

// Custom hook to use the DictContext
export const useDict = () => {
  return useContext(DictContext);
};
