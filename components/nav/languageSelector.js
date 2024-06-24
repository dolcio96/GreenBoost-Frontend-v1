import React, { ReactNode, useEffect, useState } from 'react';
import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useLanguage} from '@context/LanguageContext'
export default function LanguageSelector() {


  const { language, changeLanguage  } = useLanguage();
  const { i18n } = useTranslation();
  
  useEffect(() => {
    // Set the language in i18n when it changess
    console.log('Language:', language); 
    i18n.changeLanguage(language);
    console.log(789);
  }, [language]);






  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    console.log(456);
    changeLanguage(selectedLanguage);
    //i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Select  defaultValue={i18n.language} onChange={handleChangeLanguage}>
      <option style={{ color: 'black' }}  value="en">English</option>
      <option style={{ color: 'black' }}  value="it">Italiano</option>
    </Select>
  );
}
