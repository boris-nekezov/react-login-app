import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import SuccessScreen from "./pages/SuccessScreen";
import PrivateRoutes from "./utils/PrivateRoutes";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LogoutButton from "./components/LogoutButton";

import { selectIsAuthenticated } from "./features/auth/authSelectors";
import { useAppSelector } from "./app/hooks";

const App = () => {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const token = localStorage.getItem("authToken");
  const isLoggedIn = token || isAuthenticated;
  const redirectPath = isLoggedIn ? "/success" : "/login";

  return (
    <Router>
      <LanguageSwitcher />
      {isLoggedIn && <LogoutButton />}
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/success" element={<SuccessScreen />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<Navigate to={redirectPath} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};
export default App;

/*

user1@example.com

password123#12321@@

*/
