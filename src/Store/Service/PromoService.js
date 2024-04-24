import {createAsyncThunk} from '@reduxjs/toolkit';
import { type_constants } from '../Constant';
import { apiHandle } from '../../Config/ApiHandle';



// get all banners
export const get_all_promos = createAsyncThunk(type_constants.GET_ALL_PROMOS,async () => {
      try {
        const response = await apiHandle.get('api/v1/promos');
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