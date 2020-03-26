import { Alert } from 'react-native';

import { takeLatest, all, call, put } from 'redux-saga/effects';

// import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';
import { translate } from '~/locales';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (user.provider) {
      Alert.alert(
        translate('login_error'),
        translate('user_cannot_be_provider')
      );
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      translate('authentication_failed'),
      translate('there_was_an_error_in_the_login_check_your_credentials')
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    // history.push('/');
  } catch (err) {
    Alert.alert(
      translate('registration_failed'),
      translate('there_was_an_error_in_the_registration_check_your_data')
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
