import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../Utils/Async_Status";
import { get_all_promos } from "../Service/PromoService";

const initialState = {
  get_all_promos_status: asyncStatus.IDLE,
  get_all_promos_error: false,
  get_all_promos_data: [],
};

const All_Promos_Slice = createSlice({
  name: 'All_Promos_Slice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(get_all_promos.pending, (state) => {
        state.get_all_promos_status = asyncStatus.LOADING;
      
      })
      builder.addCase(get_all_promos.fulfilled, (state,{payload}) => {
        state.get_all_promos_status = asyncStatus.SUCCEEDED;
        state.get_all_promos_data = payload.data; // Assuming payload structure is { success: boolean, data: any }

      })
      builder.addCase(get_all_promos.rejected, (state, action) => {
        state.get_all_promos_status = asyncStatus.ERROR;
        state.get_all_promos_error = true;

      });
  },
});

export default All_Promos_Slice.reducer;