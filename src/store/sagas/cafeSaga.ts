import { call, put, takeLatest } from "redux-saga/effects";
import {
  SucessRequestCafe,
  requestCafe,
  faildRequestCafe,
} from "../reducers/cafeSlice";
import { currentUser } from "../../services/employee";

function* fetchCafes(): any {
  try {
    let response = yield call(currentUser);
    response = response.data;

    if (response) {
      yield put(SucessRequestCafe(response));
    } else {
      yield put(faildRequestCafe("Null"));
    }
  } catch (e: any) {
    yield put(faildRequestCafe(e.data.error));
  }
}

function* cafeSaga() {
  yield takeLatest(requestCafe, fetchCafes);
}

export default cafeSaga;
