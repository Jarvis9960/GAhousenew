import create, { GetState, SetState } from "zustand";
import { devtools, persist } from 'zustand/middleware'

type WhishListState = {
  wishListState: Array<string>;
  addWishListState: (val:string) => void;
  removeWishListState: (val:string) => void;
};

const useWishListStore = create<WhishListState>()(
  persist(
    devtools((set: SetState<WhishListState>, get: GetState<WhishListState>) => ({
      wishListState: [],
      addWishListState: (val) => {
        const WishList = get().wishListState
        set((state) => ({
            ...state,
            wishListState:!WishList.includes(val)?[...WishList,val]:WishList
        }))
      },
      removeWishListState: (val) => {
        const WishList = get().wishListState
        const newcWishList = WishList?.filter(c => c!=val)
        set((state) => ({
            ...state,
            wishListState:newcWishList
        }))
      }
    })),
    { name: 'WhishListState', version: 1, getStorage: () => localStorage }
  ))




export default useWishListStore;
