import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch IS User LoggedIn Or Not From Backend
export const userLoggedIn = createAsyncThunk('isLoggedIn/user', async () => {
  try {
    let res = await fetch('/api/isLoggedIn', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let data = await res.json();
    // console.log('userLoggedIn:dispatchData', data);
    if (data) {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
});

// Logout User
export const userLogout = createAsyncThunk('logout/user', async () => {
  try {
    const res = await fetch('/api/logout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      credentials: 'include',
    });
    const data = await res.json();
    // console.log('login-data:', data);

    return data;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
    id: null,
    username: '',
    loading: true,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.id = action.payload._id;
    },

    logout: (state) => {
      console.log(state);
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [userLoggedIn.pending]: (state) => {
      state.loading = true;
    },
    [userLoggedIn.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.username = action.payload.username;
      state.id = action.payload._id;
    },
    [userLoggedIn.rejected]: (state) => {
      state.loading = false;
    },

    //logout
    [userLogout.pending]: (state) => {
      state.loading = true;
    },
    [userLogout.fulfilled]: (state, action) => {
      state.loading = false;
      state.isLoggedIn = action.payload?.isLoggedIn;
    },
    [userLogout.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export let authActions = authSlice.actions;
export default authSlice;
