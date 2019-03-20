import {
  call, put, select, all, takeLatest,
} from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as ModalActions, Types as ModalTypes } from '../ducks/modal';

export function* getMarkerRequest(action) {
  try {
    const coordinates = yield select(state => state.modal.coordinates);
    const response = yield call(api.get, `users/${action.payload.user}`);

    yield put(ModalActions.addMarkerSuccess({ user: response.data, coordinates }));
    yield put(ModalActions.hideModal());
  } catch (err) {
    // Error
  }
}

export default function* rootSaga() {
  return yield all([takeLatest(ModalTypes.REQUEST, getMarkerRequest)]);
}
