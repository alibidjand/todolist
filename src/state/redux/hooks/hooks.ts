import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { RootState, appDispatch } from "../api/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<appDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
