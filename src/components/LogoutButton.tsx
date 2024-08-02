// components/LogoutButton.js
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { logout } from "../features/auth/authSlice";
const LogoutButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button type="submit" onClick={handleLogout} variant="contained">
            {t("logout")}
          </Button>
        </Box>
      )}
    </>
  );
};

export default LogoutButton;
