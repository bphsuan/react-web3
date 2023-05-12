import { call, put, takeLatest } from "redux-saga/effects";
import Web3 from "web3";
import {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceFailure,
} from "./slice";
const ganacheUrl = "http://localhost:7545"; // Ganache 預設的 RPC 網址
const web3 = new Web3(ganacheUrl);

function* fetchBalanceAsync(action) {
  try {
    const weiBalance = yield call(web3.eth.getBalance, action.payload);
    const ethBalance = web3.utils.fromWei(weiBalance, "ether");
    yield put(
      fetchBalanceSuccess({ balance: ethBalance, account: action.payload })
    );
  } catch (error) {
    yield put(fetchBalanceFailure(error.message));
  }
}

function* banlanceSaga() {
  yield takeLatest(fetchBalanceRequest, fetchBalanceAsync);
}

export default banlanceSaga;
