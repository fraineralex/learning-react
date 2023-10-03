import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => appDispatch = useDispatch;
