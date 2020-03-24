import { Alert } from 'react-native';

import { all, takeLatest, put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';
import { translate } from '~/locales';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert(translate('profile_updated_successfully'));
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      translate('update_failed'),
      translate('there_was_an_error_updating_your_profile_check_your_data')
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
