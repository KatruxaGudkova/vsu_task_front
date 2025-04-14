import {thunk} from "redux-thunk";
import {rootReducer} from "./reducers";
import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production",
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export {store, AppDispatch, RootState, AppThunk};
