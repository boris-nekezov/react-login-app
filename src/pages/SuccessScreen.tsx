import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

const SuccessScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box display="flex" justifyContent="center" m={10}>
        <Typography variant="h1">{t("success")}</Typography>
      </Box>
      <Box display="flex" justifyContent="center" m={10}>
        <Typography variant="h2">{t("successLogin")}</Typography>
      </Box>
    </>
  );
};

export default SuccessScreen;
