import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { type_constants } from "./Constant";
import userAuthSlice from "./Slice/AuthSlice";
import All_Banners_Slice from "./Slice/BannerSlice"
import All_Promos_Slice from "./Slice/PromoSlice"
// Middlewares
// const customMiddleware = ...

const reducers = combineReducers({
  auth: userAuthSlice,
  banners:All_Banners_Slice,
  promos:All_Promos_Slice

});

const rootReducer = (state, action) => {
  if (action.type === type_constants.LOGOUT_USER) {
    state = undefined;
  }
  return reducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
 
});
