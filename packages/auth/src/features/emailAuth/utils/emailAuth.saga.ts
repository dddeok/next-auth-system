import { put, all, takeEvery } from 'redux-saga/effects';
import { call } from 'typed-redux-saga';
import { sendingEmailRequest } from './emailAuth.api';
import {
  sendingEmailRequestStart,
  sendingEmailRequestSuccess,
  sendingEmailRequestFailure,
} from './emailAuth.action';

function* sendEmailSaga(action: ReturnType<typeof sendingEmailRequestStart>) {
  try {
    const email = action.payload;
    const { emailAuthenticationId } = yield* call(sendingEmailRequest, email);
    yield put(sendingEmailRequestSuccess(email, emailAuthenticationId));
  } catch (err) {
    yield put(sendingEmailRequestFailure());
    console.log(err);
  }
}

export function* watchEmailAuth() {
  yield all([takeEvery(sendingEmailRequestStart.type, sendEmailSaga)]);
}
