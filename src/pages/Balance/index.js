import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBalanceRequest } from "./slice";

const App = () => {
  const dispatch = useDispatch();
  const { account, balance, loading, error } = useSelector(
    (state) => state.balance
  );

  useEffect(() => {
    dispatch(fetchBalanceRequest("0x57a3449f0638B6b482ab3B95a31A90B22FF6907E"));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>Account: {account}</div>
      <div>Balance: {balance} ETH</div>
    </div>
  );
};

export default App;
