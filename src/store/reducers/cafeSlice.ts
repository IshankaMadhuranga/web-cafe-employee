import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../";

export interface Cafe {
  name: string;
  description: string;
  totalEmployees: number;
  location: string;
  id: string | number;
}
export interface CafeState {
  readonly cafes: Cafe[] | null;
  readonly cafeId: number;
  readonly processing: boolean;
  readonly error?: string | null;
}

const initialState: CafeState = {
  cafes: null,
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
    sucessRequestCafe: (state, action: PayloadAction<Cafe[]>) => {
      return { ...initialState, cafes: action.payload, processing: false };
    },
    faildRequestCafe: (state, action: PayloadAction<string>) => {
      return { ...state, error: action.payload, processing: false };
    },
    requestDeleteCafe: (state, action: PayloadAction<number>) => {
      return { ...state, cafeId: action.payload, processing: true };
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
  requestDeleteCafe,
  sucessRequestCafe,
  faildRequestCafe,
  sucessDeleteCafe,
  faildDeleteCafe,
} = cafeSlice.actions;
export const selectCafe = (state: RootState) => state.cafes.cafes;
export const selectCafeId = (state: RootState) => state.cafes.cafeId;
export const selectCafeProcessing = (state: RootState) =>
  state.cafes.processing;
export const selectError = (state: RootState) => state.cafes.error;
export default cafeSlice.reducer;
