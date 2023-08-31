import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";

// 1. Ensure the user is authenticated before calling getUser
// Modify the async thunk to check if the user is authenticated before fetching the data
export const getUserDetail = createAsyncThunk(
  "user/getUserDetail",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { user } = state.user;

    // Check if the user is authenticated and has a valid access token
    if (!user || !user.access_token) {
      // If the user is not authenticated, you may redirect to the login page or handle it as needed
      // For example, you can throw an error and handle it in the extraReducers section
      throw new Error("User is not authenticated.");
    }

    try {
      return await supabase.auth.getUser();
    } catch (error) {
      // Handle any errors that occur during the API call
      // For example, if the API returns a 401 Unauthorized error, you can throw an error and handle it in the extraReducers section
      throw new Error("Failed to fetch user data.");
    }
  }
);

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      state.user = action.payload?.data?.user;
    });

    // 2. Handle errors in the extraReducers section
    builder.addCase(getUserDetail.rejected, (state, action) => {
      // Check the error message to see if it's due to an unauthorized request
      if (action.error.message === "User is not authenticated.") {
        // Handle the situation when the user is not authenticated (e.g., redirect to login page)
        // Or you can clear the user state if needed
        state.user = null;
      } else {
        // Handle other errors that may occur during the API call
        // For example, you can show an error message to the user
        console.error("Failed to fetch user data:", action.error.message);
      }
    });
  },
});

export { initialState };
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
