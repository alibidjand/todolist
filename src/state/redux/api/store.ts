import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { persistStore } from "redux-persist";
import { persistedReducer } from "../reducer";

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
  });

export const store = makeStore();
export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type AppStore = ReturnType<typeof makeStore>;
export type appDispatch = AppStore["dispatch"];
export type RootState = ReturnType<AppStore["getState"]>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
