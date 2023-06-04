import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../";

export interface EmployeeState {
  readonly employee: object[] | null;
  readonly empId: number;
  readonly processing: boolean;
  readonly error?: string | null;
}

const initialState: EmployeeState = {
  employee: null,
  empId: 0,
  processing: false,
  error: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    requestEmployees: (state) => {
      return { ...state, error: null, processing: true };
    },
    sucessRequestEmployees: (state, action: PayloadAction<object[]>) => {
      return { ...initialState, employee: action.payload, processing: false };
    },
    faildRequestEmployees: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, processing: false };
    },
    requestDeleteEmployee: (state, action: PayloadAction<number>) => {
      return { ...state, cafeId: action.payload, processing: true };
    },
    sucessDeleteEmployee: (state) => {
      return { ...state, error: null, processing: false };
    },
    faildDeleteEmployee: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, processing: false };
    },
  },
});

export const {
  requestEmployees,
  sucessRequestEmployees,
  faildRequestEmployees,
  sucessDeleteEmployee,
  requestDeleteEmployee,
  faildDeleteEmployee,
} = employeeSlice.actions;
export const selectEmployees = (state: RootState) => state.employees.employee;
export const selectEmployeeId = (state: RootState) => state.employees.empId;
export const selectError = (state: RootState) => state.employees.error;
export default employeeSlice.reducer;
