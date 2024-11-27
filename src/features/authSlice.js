import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userRole: null,
  permissions: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRole: (state, action) => {
      state.userRole = action.payload.role;
      state.permissions = action.payload.permissions;
    },
    logout: (state) => {
      state.userRole = null;
      state.permissions = [];
    },
  },
});

export const { setRole, logout } = authSlice.actions;
export default authSlice.reducer;
