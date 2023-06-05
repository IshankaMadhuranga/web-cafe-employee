import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../";

export interface EmployeeDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  daysWorked: number;
  cafeName: string;
  gender: number;
  cafeId: number;
}
export interface EmployeeState {
  readonly employee: EmployeeDto[] | null;
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
    sucessRequestEmployees: (state, action: PayloadAction<EmployeeDto[]>) => {
      return { ...initialState, employee: action.payload, processing: false };
    },
    faildRequestEmployees: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, processing: false };
    },
    requestDeleteEmployee: (state, action: PayloadAction<number>) => {
      return { ...state, empId: action.payload, processing: true };
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
export const selectEmpProcessing = (state: RootState) =>
  state.employees.processing;
export const selectError = (state: RootState) => state.employees.error;
export default employeeSlice.reducer;
