import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../";

export interface EmployeeState {
  readonly employee: object[] | null;
  readonly error?: string | null;
}

const initialState: EmployeeState = {
  employee: null,
  error: null,
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    requestEmployee: (state) => {
      return { ...state, error: null };
    },
    sucessRequestEmployee: (state, action: PayloadAction<object[]>) => {
      return { error: null, employee: action.payload };
    },
    faildRequestEmployee: (state, action: PayloadAction<string>) => {
      return { error: action.payload, employee: null };
    },
  },
});

export const { requestEmployee, sucessRequestEmployee, faildRequestEmployee } =
  employeeSlice.actions;
export const selectEmployees = (state: RootState) => ({
  employee: state.employees,
});
export const selectError = (state: RootState) => state.employees.error;
export default employeeSlice.reducer;
