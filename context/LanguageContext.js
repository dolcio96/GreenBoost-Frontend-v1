import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = typeof window !== 'undefined' ? localStorage.getItem('selectedLanguage') : null;
  const [language, setLanguage] = useState(storedLanguage || 'en');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', newLanguage);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const contextValue = useContext(LanguageContext);
  return contextValue;
};
