import { combineReducers, Reducer } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authSlice from "./slice/authSlice";

export type RootReducer = ReturnType<typeof combinedReducer>;

const reducers = {
  authSlice,
};
const persistConfig = {
  key: "root",
  storage,
};
const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootReducer> = (state, action) => {
  return combinedReducer(state, action);
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
