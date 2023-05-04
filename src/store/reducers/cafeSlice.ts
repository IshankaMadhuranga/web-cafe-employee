import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../";

export interface CafeState {
  readonly cafe: object[] | null;
  readonly cafeId: number;
  readonly processing: boolean;
  readonly error?: string | null;
}

const initialState: CafeState = {
  cafe: null,
  cafeId: 0,
  processing: false,
  error: null,
};

export const cafeSlice = createSlice({
  name: "cafe",
  initialState,
  reducers: {
    requestCafe: (state) => {
      return { ...state, error: null, processing: true };
    },
    sucessRequestCafe: (state, action: PayloadAction<object[]>) => {
      return { ...initialState, cafe: action.payload, processing: false };
    },
    faildRequestCafe: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, processing: false };
    },
    requestDeleteCafe: (state, action: PayloadAction<number>) => {
      return { ...initialState, cafeId: action.payload, processing: true };
    },
    sucessDeleteCafe: (state) => {
      return { ...state, error: null, processing: false };
    },
    faildDeleteCafe: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, processing: false };
    },
  },
});

export const {
  requestCafe,
  sucessRequestCafe,
  faildRequestCafe,
  sucessDeleteCafe,
} = cafeSlice.actions;
export const selectCafe = (state: RootState) => ({
  cafe: state.cafes,
});
export const selectError = (state: RootState) => state.cafes.error;
export default cafeSlice.reducer;
