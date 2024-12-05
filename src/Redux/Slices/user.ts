import {createSlice} from '@reduxjs/toolkit';
import {authApi} from '../Services/Auth';
import type {RootState} from '../store';
import {userApi} from '../Services/User';

interface IUserState {
  isLoggedIn: boolean;
  user: any;
  settings: any;
  token: string | null;
  email: string;
  password: string;
  checked: boolean;
  isSubscribe: boolean;
  TermsAgree: boolean;
}

const initialState: IUserState = {
  isLoggedIn: false,
  token: null,
  user: {},
  email: '',
  password: '',
  checked: false,
  settings: {},
  isSubscribe: false,
  TermsAgree: false,
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, {payload}) => {
      state.isLoggedIn = true;
      state.token = payload?.token;
      state.user = payload?.user;
    },
    setLogout: state => {
      state.isLoggedIn = false;
      state.token = null;
      state.TermsAgree = false;
      state.isSubscribe = false;
    },
    setCredentials: (state, {payload}) => {
      state.email = payload?.email;
      state.password = payload?.password;
      state.checked = payload?.checked;
    },
    setIsSubscribe: (state, action) => {
      state.isSubscribe = action.payload;
    },
    setTermAgree: (state, action) => {
      state.TermsAgree = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.getProfile.matchFulfilled,
      (state, {payload}) => {
        console.log(
          'USER PROFILE PAYLOAD ======================================================================================================================>',
          payload,
        );

        state.user = payload;
      },
    );
    builder.addMatcher(
      userApi.endpoints.updateProfile.matchFulfilled,
      (state, {payload}) => {
        console.log(
          'EDIT USER PROFILE PAYLOAD ======================================================================================================================>',
          payload,
        );
        state.user = payload;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(
      userApi.endpoints.getSettings.matchFulfilled,
      (state, {payload}) => {
        console.log(
          'SETTINGS ======================================================================================================================>',
          payload,
        );
        state.settings = payload;
      },
    );
  },
});

export const {
  setLogin,
  setLogout,
  setCredentials,
  setIsSubscribe,
  setTermAgree,
} = user.actions;

export const selectLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectUser = (state: RootState) => state.user.user;
export const getSettings = (state: RootState) => state.user.settings;
export const getTermsAgreement = (state: RootState) => state.user.TermsAgree;
export const getSubscriptionStatus = (state: RootState) =>
  state.user.isSubscribe;
export const selectSavedCredentials = (state: RootState) => ({
  email: state.user.email,
  password: state.user.password,
  checked: state.user.checked,
});
export default user.reducer;
