import { useSelector } from "react-redux";
import { StoreRootType } from "types/useStore.types";

const useStore = (): StoreRootType => {
	return useSelector<StoreRootType, StoreRootType>((state) => state);
};

export default useStore;
