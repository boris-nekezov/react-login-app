import { Box } from "@mui/material";
import LoginForm from "./components/LoginForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

const App = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      minHeight="100vh"
      className="App"
      m={10}
    >
      <ForgotPasswordForm />
      <hr />
      <LoginForm />
    </Box>
  );
};

export default App;
