import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import type { User } from "./UserSlice";

interface PostState {
  posts: any[];
  loading: boolean;
  error: string | null | undefined;
  pagination: {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  } | null;
}

const apiBaseURL = import.meta.env.VITE_REACT_API_URL;

export const fetchPosts = createAsyncThunk<
  { posts: any[]; pagination: any },
  { page: number; pageSize: number },
  { state: RootState; rejectValue: string }
>("user/fetchPosts", async ({ page }, { getState, rejectWithValue }) => {
  try {
    const accessToken = (getState().user.user as User).accessToken;
    const response = await axios.get(`${apiBaseURL}/posts`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { page, pageSize: 15 },
    });
    if (response.data) {
      console.log("Fetch successful");
      return {
        posts: response.data.results,
        pagination: response.data.pagination,
      };
    } else {
      return rejectWithValue("No data received from server");
    }
  } catch (error: any) {
    return rejectWithValue(error.response?.data || "Failed to fetch posts");
  }
});

const initialState: PostState = {
  posts: [],
  pagination: null,
  loading: false,
  error: null,
};

const PostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = PostSlice.actions;
export default PostSlice.reducer;
