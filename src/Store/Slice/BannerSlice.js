import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../Utils/Async_Status";
import { get_all_banners } from "../Service/BannerService";

const initialState = {
  get_all_banners_status: asyncStatus.IDLE,
  get_all_banners_error: false,
  get_all_banners_data: [],
  userEmail: "", // User email
  userPassword: "", // User password
};

const All_Banner_Slice = createSlice({
  name: 'All_Banner_Slice',
  initialState: initialState,
  reducers: {

    // Reducers jo email aur password ko set karte hain
    setEmail(state, action) {
      state.userEmail = action.payload;
    },
    setPassword(state, action) {
      state.userPassword = action.payload;
    },


  },
  extraReducers: builder => {
    builder.addCase(get_all_banners.pending, (state) => {
        state.get_all_banners_status = asyncStatus.LOADING;
      
      })
      builder.addCase(get_all_banners.fulfilled, (state,{payload}) => {
        state.get_all_banners_status = asyncStatus.SUCCEEDED;
        state.get_all_banners_data = payload; // Assuming payload structure is { success: boolean, data: any }

      })
      builder.addCase(get_all_banners.rejected, (state, action) => {
        state.get_all_banners_status = asyncStatus.ERROR;
        state.get_all_banners_error = true;

      });
  },
});
export const { setEmail, setPassword } = All_Banner_Slice.actions;

export default All_Banner_Slice.reducer;