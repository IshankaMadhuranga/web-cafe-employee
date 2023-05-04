import { call, put, takeLatest } from "redux-saga/effects";
import {
  requestEmployee,
  sucessRequestEmployee,
  faildRequestEmployee,
  sucessDeleteEmployee,
} from "../reducers/employeeSlice";
import { fetchAllEmployee } from "../../services/employee";

function* fetchEmployee(): any {
  try {
    let response = yield call(fetchAllEmployee);
    response = response.data;

    if (response) {
      yield put(sucessRequestEmployee(response));
    } else {
      yield put(faildRequestEmployee("Null"));
    }
  } catch (e: any) {
    yield put(faildRequestEmployee(e.data.error));
  }
}

function* employeeSaga() {
  yield takeLatest([requestEmployee, sucessDeleteEmployee], fetchEmployee);
}

export default employeeSaga;
