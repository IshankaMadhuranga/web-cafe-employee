import { call, put, takeLatest } from "redux-saga/effects";
import {
  sucessRequestCafe,
  requestCafe,
  faildRequestCafe,
  requestDeleteCafe,
  sucessDeleteCafe,
  faildDeleteCafe,
  selectCafeId,
} from "../reducers/cafeSlice";
import { getAllCafe, deleteCafe } from "../../services/cafe";

function* fetchCafes(): any {
  try {
    let response = yield call(getAllCafe);
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

function* deletCafe(): any {
  try {
    let response = yield call(deleteCafe, Number(selectCafeId));
    response = response.status;

    if (response == 204) {
      yield put(sucessDeleteCafe);
    } else {
      yield put(faildDeleteCafe("Null"));
    }
  } catch (e: any) {
    yield put(faildRequestCafe(e.data.error));
  }
}

function* cafeSaga() {
  yield takeLatest([requestCafe, sucessDeleteCafe], fetchCafes);
  yield takeLatest([requestDeleteCafe], deletCafe);
}

export default cafeSaga;
