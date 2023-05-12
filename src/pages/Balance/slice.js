import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  account: "",
  balance: "",
  loading: false,
  error: null,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    fetchBalanceRequest(state, action) {
      state.loading = true;
    },
    fetchBalanceSuccess(state, action) {
      state.loading = false;
      state.account = action.payload.account;
      state.balance = action.payload.balance;
    },
    fetchBalanceFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBalanceRequest, fetchBalanceSuccess, fetchBalanceFailure } =
  balanceSlice.actions;
export default balanceSlice.reducer;
