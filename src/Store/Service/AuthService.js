import {createAsyncThunk} from '@reduxjs/toolkit';
import { type_constants } from '../Constant';
import { apiHandle, apiHandle1 } from '../../Config/ApiHandle';



// register_user
export const register_user_post_async = createAsyncThunk(type_constants.REGISTER_USER,async (post_data) => {
      try {
        const response = await apiHandle.post('api/v1/register',post_data);

        const res_data = await response.data;
        return res_data;

      } catch (error) {
        if (error?.response?.data) {
          throw Error(error.response.data.message);
        } else {
          throw Error(error.message);
        }
      }
    },
  );
  





  // Login User
export const login_user_post_async = createAsyncThunk(type_constants.LOGIN_USER,async (post_data) => {
  try {
    const response = await apiHandle.post('api/v1/login',post_data);
    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      console.log(error.message);

      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);


// logout user 

export const logout_user_post_async = createAsyncThunk(type_constants.LOGOUT_USER,async (post_data) => {
  try {
    const response = await apiHandle.get('api/v1/logout');
    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      console.log(error.message);

      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);


// activities


export const activities_async = createAsyncThunk(type_constants.ACTIVITIES,async (post_data) => {
  try {
    const response = await apiHandle.get('api/v1/activities');
    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      console.log(error.message);

      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);


// categories

export const categories_async = createAsyncThunk(type_constants.CATEGORIES,async (post_data) => {
  try {
    const response = await apiHandle.get('api/v1/categories');
    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      console.log(error.message);

      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);


export const update_profile_post_async = createAsyncThunk(type_constants.UPDATEPROFILE,async (post_data) => {
  try {
    const response = await apiHandle.post('api/v1/update-profile',post_data);

    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);







// Image upload
export const image_Upload = createAsyncThunk(type_constants.IMAGE_UPLOAD,async (post_data) => {
  try {
    const response = await apiHandle1.post('api/v1/upload-image',post_data);

    const res_data = await response.data;
    return res_data;

  } catch (error) {
    if (error?.response?.data) {
      throw Error(error.response.data.message);
    } else {
      throw Error(error.message);
    }
  }
},
);
