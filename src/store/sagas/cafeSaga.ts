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
    let response = yield call(deleteCafe, 3); //To Do
    response = response.data;

    if (response) {
      yield put(sucessDeleteCafe(response));
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
