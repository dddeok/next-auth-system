import { createAction } from '@reduxjs/toolkit';

export const sendingEmailRequestStart = createAction(
  'emailAuth/sendingEmailRequestStart',
  (email: string) => {
    return { payload: email };
  },
);

export const sendingEmailRequestSuccess = createAction(
  'emailAuth/sendingEmailRequestSuccess',
  (email: string, emailAuthenticationId: string) => {
    return { payload: { email, emailAuthenticationId } };
  },
);

export const sendingEmailRequestFailure = createAction(
  'emailAuth/sendingEmailRequestFailure',
  () => {
    return { payload: null };
  },
);
