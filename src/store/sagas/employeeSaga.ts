import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  requestEmployees,
  requestDeleteEmployee,
  sucessRequestEmployees,
  faildRequestEmployees,
  sucessDeleteEmployee,
  selectEmployeeId,
  faildDeleteEmployee,
} from "../reducers/employeeSlice";
import { getEmployees, deleteEmployee } from "../../services/employee";

function* fetchEmployee(): any {
  try {
    let response = yield call(getEmployees);
    response = response.data;

    if (response) {
      yield put(sucessRequestEmployees(response));
    } else {
      yield put(faildRequestEmployees("Null"));
    }
  } catch (e: any) {
    yield put(faildRequestEmployees(e.data.error));
  }
}

function* deletCafe(): any {
  try {
    const empId = yield select(selectEmployeeId);
    let response = yield call(deleteEmployee, empId);
    response = response.status;

    if (response == 204) {
      yield put(sucessDeleteEmployee());
    } else {
      yield put(faildDeleteEmployee("Null"));
    }
  } catch (e: any) {
    yield put(faildDeleteEmployee(e.data.error));
  }
}

function* employeeSaga() {
  yield takeLatest([requestEmployees, sucessDeleteEmployee], fetchEmployee);
  yield takeLatest([requestDeleteEmployee], deletCafe);
}

export default employeeSaga;
