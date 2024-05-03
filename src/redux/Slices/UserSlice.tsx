import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export interface User {
  message: string;
  accessToken: string;
  refreshToken: string;
}

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null | undefined;
  isAuth: boolean;
}

interface AuthPayload {
  email: string;
  password: string;
  token_expires_in?: string;
}

const apiBaseURL = import.meta.env.VITE_REACT_API_URL;

const saveTokens = (tokens: { accessToken: string; refreshToken: string }) => {
  localStorage.setItem("accessToken", tokens.accessToken);
  localStorage.setItem("refreshToken", tokens.refreshToken);
};

const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

export const createUser = createAsyncThunk<
  User,
  AuthPayload,
  { rejectValue: string }
>("user/create", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${apiBaseURL}/signup`, userData);
    if (response.data) {
      console.log("Signup successful!");
      saveTokens({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      return response.data;
    } else {
      console.error("Signup failed: Invalid server response");
      return rejectWithValue("Invalid response from server");
    }
  } catch (error: any) {
    return rejectWithValue("User already exists");
  }
});

export const loginUser = createAsyncThunk<
  User,
  AuthPayload,
  { rejectValue: string }
>("user/login", async (loginData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${apiBaseURL}/login`, loginData);
    if (response.data) {
      console.log("Login successful");
      saveTokens({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      return response.data;
    } else {
      console.error("Login failed: Invalid server response");
      return rejectWithValue("Invalid response from server");
    }
  } catch (error: any) {
    return rejectWithValue("Incorrect email or password");
  }
});

export const refreshToken = createAsyncThunk<
  User,
  { refreshToken: string },
  { state: RootState; rejectValue: string }
>("user/refresh", async ({ refreshToken }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${apiBaseURL}/refresh-token`, {
      refreshToken,
      token_expires_in: "30m",
    });
    if (response.data && response.data.accessToken) {
      console.log("Token refresh successful");
      saveTokens({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
      return {
        message: "Token refreshed successfully",
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      };
    } else {
      console.error("Token refresh failed: Invalid server response");
      return rejectWithValue("Invalid response from server");
    }
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Network error");
  }
});

const loadInitialState = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (accessToken && refreshToken) {
    return {
      user: { message: "", accessToken, refreshToken },
      loading: false,
      error: null,
      isAuth: true,
    };
  } else {
    return {
      user: null,
      loading: false,
      error: null,
      isAuth: false,
    };
  }
};

const initialState: UserState = loadInitialState();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      clearTokens();
      state.user = null;
      state.isAuth = false;
    },
    setAuthStatus: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${action.payload.accessToken}`;
      })
      .addCase(
        createUser.rejected,
        (state, action: PayloadAction<string | null | undefined>) => {
          state.error = action.payload;
          state.loading = false;
          state.isAuth = false;
        }
      )
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuth = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(
        loginUser.rejected,
        (state, action: PayloadAction<string | null | undefined>) => {
          state.error = action.payload;
          state.loading = false;
          state.isAuth = false;
        }
      )
      .addCase(refreshToken.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isAuth = true;
      })
      .addCase(
        refreshToken.rejected,
        (state, action: PayloadAction<string | null | undefined>) => {
          state.error = action.payload;
          state.isAuth = false;
        }
      );
  },
});

export const { logout, setAuthStatus, clearError } = userSlice.actions;
export default userSlice.reducer;
