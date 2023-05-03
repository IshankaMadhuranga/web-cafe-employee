import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../";

export interface CafeState {
  readonly cafe: object[] | null;
  readonly error?: string | null;
}

const initialState: CafeState = {
  cafe: null,
  error: null,
};

export const cafeSlice = createSlice({
  name: "cafe",
  initialState,
  reducers: {
    requestCafe: (state) => {
      return { ...state, error: null };
    },
    SucessRequestCafe: (state, action: PayloadAction<object[]>) => {
      return { error: null, cafe: action.payload };
    },
    faildRequestCafe: (state, action: PayloadAction<string>) => {
      return { error: action.payload, cafe: null };
    },
  },
});

export const { requestCafe, SucessRequestCafe, faildRequestCafe } =
  cafeSlice.actions;
export const selectCafe = (state: RootState) => ({
  cafe: state.cafes,
});
export const selectError = (state: RootState) => state.cafes.error;
export default cafeSlice.reducer;
