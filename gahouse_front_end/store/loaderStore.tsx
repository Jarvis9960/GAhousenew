import create, { GetState, SetState } from "zustand";
import { devtools, persist } from 'zustand/middleware'

type PopState = {

  loader: boolean;
  setloader: (val: boolean) => void;
};

const useLoaderStore = create<PopState>()(

  (set: SetState<PopState>, get: GetState<PopState>) => ({
    loader: false,
    setloader: (val) =>
      set((state) => ({
        ...state,
        loader: val,
      })),
  })

)

export default useLoaderStore;
