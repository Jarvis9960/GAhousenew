import create, { GetState, SetState } from "zustand";
import { devtools, persist } from 'zustand/middleware'

type CompareState = {
  comapreState: Array<string>;
  addComapreState: (val:string) => void;
  removeComapreState: (val:string) => void;
};

const useCompareStore = create<CompareState>()(
  persist(
    devtools((set: SetState<CompareState>, get: GetState<CompareState>) => ({
      comapreState: [],
      addComapreState: (val) => {
        const compare = get().comapreState
        set((state) => ({
            ...state,
            comapreState:!compare.includes(val)?[...compare,val]:compare
        }))
      },
      removeComapreState: (val) => {
        const comapre = get().comapreState
        const newcComapre = comapre?.filter(c => c!=val)
        set((state) => ({
            ...state,
            comapreState:newcComapre
        }))
      },
      
    })),
    { name: 'CompareState', version: 1, getStorage: () => localStorage }
  ))




export default useCompareStore;
