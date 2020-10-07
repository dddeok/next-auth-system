import { createReducer } from '@reduxjs/toolkit';
import { RootState } from '../../../app/rootReducer';

import {
  sendingEmailRequestStart,
  sendingEmailRequestSuccess,
  sendingEmailRequestFailure,
} from './emailAuth.action';
interface InitialState {
  emailAuth: {
    email: string;
    emailAuthenticationId: string;
    isAuthenticated: boolean;
  };
  isSending: boolean;
}

const initialState: InitialState = {
  emailAuth: null,
  isSending: false,
};

const reducer = createReducer(initialState, {
  [sendingEmailRequestStart.type]: state => {
    state.isSending = true;
  },
  [sendingEmailRequestSuccess.type]: (
    state,
    action: ReturnType<typeof sendingEmailRequestSuccess>,
  ) => {
    const { email, emailAuthenticationId } = action.payload;
    state.emailAuth = {
      ...state.emailAuth,
      email: email,
      emailAuthenticationId: emailAuthenticationId,
      isAuthenticated: false,
    };
  },
  [sendingEmailRequestFailure.type]: state => {
    state.isSending = false;
  },
});

export default reducer;

export const selectEmailAuth = (state: RootState) => state.auth.emailAuth;
export const selectIsEmailAuthSending = (state: RootState) => state.auth.isSending;
