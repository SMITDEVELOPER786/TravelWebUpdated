import { createSlice } from "@reduxjs/toolkit";
import { asyncStatus } from "../../Utils/Async_Status";
import {
  activities_async,
  categories_async,
  image_Upload,
  login_user_post_async,
  logout_user_post_async,
  register_user_post_async,
  update_profile_post_async,
} from "../Service/AuthService";

const initialState = {
  // user Register
  user_register_status: asyncStatus.IDLE,
  register_error: null,
  register_user: null,
  register_data: null,

  // user Login
  user_login_status: asyncStatus.IDLE,
  login_error: null,
  login_user: null,
  login_data: null,

  // logout
  user_logout_status: asyncStatus.IDLE,
  logout_error: null,

  // activities_
  activities_status:asyncStatus.IDLE,
  activities_data:null,
  activities_error:null,
// categories
categories_status:asyncStatus.IDLE,
categories_data:null,
categories_error:null,


// update profile
update_profile_status:asyncStatus.IDLE,
update_profile_data:null,
update_profile_error:null,



upload_image_status:asyncStatus.IDLE,
upload_image_error:null,
upload_image_data:null




};

const userAuthSlice = createSlice({
  name: "user_auth",
  initialState: initialState,

  reducers: {
    //   setValidateStatusIdle(state, {payload}) {
    //     state.validated_status = asyncStatus.IDLE;
    //   },
    //   setProfile: (state, action) => {
    //     state.profile = action.payload;
    //   },
    //   setLogoutStatus: (state, action) => {
    //     state.check_logout_status = asyncStatus.IDLE;
    //   },
    //   setlogindata: (state, action) => {
    //     state.login_data = null;
    //   },
  },

  extraReducers: (builder) => {
    // User Register
    builder.addCase(register_user_post_async.pending, (state, { payload }) => {
      state.user_register_status = asyncStatus.LOADING;
      state.register_error = null;
    });
    builder.addCase(
      register_user_post_async.fulfilled,
      (state, { payload }) => {
        state.user_register_status = asyncStatus.SUCCEEDED;
        state.register_user = payload.success;
        state.register_data = payload.data;
      }
    );
    builder.addCase(register_user_post_async.rejected, (state, actions) => {
      state.user_register_status = asyncStatus.ERROR;
      state.register_error = actions?.error?.message;
      state.register_data = null;
      state.register_user = false;
    });

    // User Login
    builder.addCase(login_user_post_async.pending, (state) => {
      state.user_login_status = asyncStatus.LOADING;
      state.login_error = null;
    });

    builder.addCase(login_user_post_async.fulfilled, (state, { payload }) => {
      state.user_login_status = asyncStatus.SUCCEEDED;
      state.login_user = payload;
      state.login_data = payload.data;
      localStorage.setItem("user_data",JSON.stringify(payload.data));
      // Save token to local storage
      localStorage.setItem("user_Token", payload.token);
    });

    builder.addCase(login_user_post_async.rejected, (state, { error }) => {
      state.user_login_status = asyncStatus.ERROR;
      state.login_error = error ? error.message : "Unknown error";
      state.login_data = null;
      state.login_user = false;
    });

    // logout user

    // Case for logout pending
    builder.addCase(logout_user_post_async.pending, (state) => {
      state.user_logout_status = asyncStatus.LOADING; // Assuming LOADING represents the logout process in progress
    });

    // Case for logout success
    builder.addCase(logout_user_post_async.fulfilled, (state) => {
      state.user_logout_status = asyncStatus.SUCCEEDED; // Assuming SUCCEEDED represents the successful logout

      localStorage.removeItem("user_Token"); // Remove token from local storage
    });

    // Case for logout failure
    builder.addCase(logout_user_post_async.rejected, (state, { error }) => {
      state.user_logout_status = asyncStatus.ERROR; // Assuming ERROR represents a failed logout attempt
      state.logout_error = error ? error.message : "Unknown error"; // Set the logout error message
    });

  // Case for activities pending

  builder.addCase(activities_async.pending, (state) => {
    state.activities_status =  asyncStatus.LOADING;
  });

  // Case for activities success
  builder.addCase(activities_async.fulfilled, (state, action) => {
    state.activities_status =  asyncStatus.SUCCEEDED;;
    state.activities_data = action?.payload.data;
  });

  // Case for activities failure
  builder.addCase(activities_async.rejected, (state, action) => {
    state.activities_status =  asyncStatus.ERROR;
    state.activities_error = action.error.message;
  });

// cat
builder.addCase(categories_async.pending, (state) => {
  state.categories_status = true;
  state.categories_error = null;
})
builder.addCase(categories_async.fulfilled, (state, action) => {
  state.categories_status = false;
  state.categories_data = action.payload.data;

})
builder.addCase(categories_async.rejected, (state, action) => {
  state.categories_status = false;
  state.categories_error = action.error.message;
});


// update profile
builder.addCase(update_profile_post_async.pending, (state) => {
  state.update_profile_status = true;
  state.update_profile_error = null;
})
builder.addCase(update_profile_post_async.fulfilled, (state, action) => {
  state.update_profile_status = false;
  state.update_profile_data = action.payload.data;

})
builder.addCase(update_profile_post_async.rejected, (state, action) => {
  state.update_profile_status = false;
  state.update_profile_error = action.error.message;
});




// upload image
builder.addCase(image_Upload.pending, (state) => {
  state.upload_image_status = asyncStatus.LOADING;
  state.upload_image_error = null;
})
builder.addCase(image_Upload.fulfilled, (state, action) => {
  state.upload_image_status = asyncStatus.SUCCEEDED;
  state.upload_image_data = action.payload.data;

})
builder.addCase(image_Upload.rejected, (state, action) => {
  state.upload_image_status = asyncStatus.ERROR;
  state.upload_image_error = action.error.message;
});









  }
  
,
});

export default userAuthSlice.reducer;
