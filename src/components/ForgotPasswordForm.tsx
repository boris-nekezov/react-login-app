import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from "../features/auth/authSlice";
import { selectAuthError } from "../features/auth/authSelectors";
import { useTranslation } from "react-i18next";
import { TextField, Button, Box } from "@mui/material";

const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const error = useSelector(selectAuthError);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(validateEmail(email));
    if (!error) {
      setSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label={t("email")}
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      {error && <div>{error}</div>}
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button type="submit" variant="contained" fullWidth>
          {t("submit")}
        </Button>
      </Box>
      {success && <div>{t("resetLinkSent")}</div>}
    </form>
  );
};

export default ForgotPasswordForm;
