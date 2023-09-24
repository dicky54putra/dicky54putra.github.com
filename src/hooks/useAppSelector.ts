import { StoreRootType } from "@store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<StoreRootType> = useSelector;
