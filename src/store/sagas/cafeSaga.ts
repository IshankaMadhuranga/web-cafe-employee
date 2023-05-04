import { call, put, takeLatest } from "redux-saga/effects";
import {
  sucessRequestCafe,
  requestCafe,
  faildRequestCafe,
  sucessDeleteCafe,
} from "../reducers/cafeSlice";
import { fetchAllCafe } from "../../services/cafe";

function* fetchCafes(): any {
  try {
    let response = yield call(fetchAllCafe);
    response = response.data;

    if (response) {
      yield put(sucessRequestCafe(response));
    } else {
      yield put(faildRequestCafe("Null"));
    }
  } catch (e: any) {
    yield put(faildRequestCafe(e.data.error));
  }
}

function* cafeSaga() {
  yield takeLatest([requestCafe, sucessDeleteCafe], fetchCafes);
}

export default cafeSaga;
