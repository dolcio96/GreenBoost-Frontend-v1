import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Select defaultValue={i18n.language} onChange={handleChangeLanguage}>
      <option value="en">English</option>
      <option value="it">Italiano</option>
    </Select>
  );
}