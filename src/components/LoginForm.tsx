import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import { selectAuthError } from "../features/auth/authSelectors";
import { useTranslation } from "react-i18next";
import { TextField, Button, Box, Link } from "@mui/material";

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector(selectAuthError);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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
      <TextField
        label={t("password")}
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      {error && <div>{error}</div>}
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button type="submit" variant="contained" fullWidth>
          {t("login")}
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" margin={2}>
        <Link href="/forgot-password">{t("forgotPassword")}</Link>
      </Box>
    </form>
  );
};

export default LoginForm;
