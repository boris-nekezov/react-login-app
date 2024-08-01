// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import users from "../../data/users.json";

interface AuthState {
  isAuthenticated: boolean;
  email: string;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  email: "",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login
    login: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
      }>,
    ) => {
      const user = users.find(
        user =>
          user.email === action.payload.email &&
          user.password === action.payload.password,
      );

      if (user) {
        state.isAuthenticated = true;
        state.email = action.payload.email;
        state.error = null;
      } else {
        state.error = "Invalid credentials";
      }
    },

    // logout
    logout: state => {
      state.isAuthenticated = false;
      state.email = "";
      state.error = null;
    },

    // validateEmail
    validateEmail: (state, action: PayloadAction<string>) => {
      const user = users.find(user => user.email === action.payload);
      state.error = user ? null : "Invalid email";
    },
  },
});

export const { login, logout, validateEmail } = authSlice.actions;
export default authSlice.reducer;
