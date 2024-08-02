import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box>
      <Button onClick={() => changeLanguage("en")}>English</Button>
      <Button onClick={() => changeLanguage("bg")}>Български</Button>
    </Box>
  );
};

export default LanguageSwitcher;
