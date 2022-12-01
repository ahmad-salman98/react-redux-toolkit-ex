import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "../features/accounts/accountSlice";


export const store = configureStore({
  reducer: {
    accounts: accountsReducer
  }
})